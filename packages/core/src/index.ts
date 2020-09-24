/**
 * 主程序, 不包含手势,
 * 主要用来适配Mouse/Touch事件
 * ==================== 参考 ====================
 * https://segmentfault.com/a/1190000010511484#articleHeader0
 * https://segmentfault.com/a/1190000007448808#articleHeader1
 * hammer.js http://hammerjs.github.io/
 * ==================== 流程 ====================
 * Event(Mouse|Touch) => BaseInput => Input => Computed => AnyTouchEvent
 */
import AnyEvent from 'any-event';
import type { Listener } from 'any-event';

import type {
    Recognizer,
    RecognizerFunction,
    RecognizerOptions,
    AnyTouchEvent, SupportEvent, ComputeFunction, ComputeWrapFunction, InputCreatorFunctionMap, InputCreatorFunction, Computed, RecognizerContext
} from '@any-touch/shared';
import {
    TOUCH, MOUSE, RECOGNIZER_STATUS
} from '@any-touch/shared';

import { mouse, touch } from './createInput';
import dispatchDomEvent from './dispatchDomEvent';
import canPreventDefault from './canPreventDefault';
import bindElement from './bindElement';
// type TouchAction = 'auto' | 'none' | 'pan-x' | 'pan-left' | 'pan-right' | 'pan-y' | 'pan-up' | 'pan-down' | 'pinch-zoom' | 'manipulation';

type BeforeEachHook = (recognizerContext: RecognizerContext, next: () => void) => void;
/**
 * 默认设置
 */
export interface Options {
    domEvents?: false | EventInit;
    isPreventDefault?: boolean;
    // 不阻止默认行为的白名单
    preventDefaultExclude?: RegExp | ((ev: SupportEvent) => boolean);
}


export interface AnyTouchFunction {
    version: string;
    Tap?: RecognizerFunction;
    Pan?: RecognizerFunction;
    Swipe?: RecognizerFunction;
    Press?: RecognizerFunction;
    Pinch?: RecognizerFunction;
    Rotate?: RecognizerFunction;
    STATUS_POSSIBLE?: RECOGNIZER_STATUS;
    STATUS_START?: RECOGNIZER_STATUS;
    STATUS_MOVE?: RECOGNIZER_STATUS;
    STATUS_END?: RECOGNIZER_STATUS;
    STATUS_CANCELLED?: RECOGNIZER_STATUS;
    STATUS_FAILED?: RECOGNIZER_STATUS;
    STATUS_RECOGNIZED?: RECOGNIZER_STATUS;
}

/**
 * 默认设置
 */
const DEFAULT_OPTIONS: Options = {
    domEvents: { bubbles: true, cancelable: true },
    isPreventDefault: true,
    preventDefaultExclude: /^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/
};

export function createAnyTouch(plugins: RecognizerFunction[] = []) {
    function AnyTouch(el?: HTMLElement, options?: Options) {
        const [on, off, $emit, destroyAE] = AnyEvent<AnyTouchEvent>();

        let _options = { ...DEFAULT_OPTIONS, ...options };
        let _beforeEachHook: BeforeEachHook;

        // 安装插件
        const _computeFunctionMap: Record<string, ComputeFunction> = {};
        let recognizers: Recognizer[] = [];
        let recognizerMap: Record<string, RecognizerContext> = {};
        plugins.forEach(plugin => {
            use(plugin)
        });

        // 之所以强制是InputCreatorFunction<SupportEvent>,
        // 是因为调用this.inputCreatorMap[event.type]的时候还要判断类型,
        // 因为都是固定(touch&mouse)事件绑定好的, 没必要判断
        const createInputFromTouch = touch(el) as InputCreatorFunction<SupportEvent>;
        const createInputFromMouse = mouse() as InputCreatorFunction<SupportEvent>;
        const _inputCreatorMap = {
            [TOUCH.START]: createInputFromTouch,
            [TOUCH.MOVE]: createInputFromTouch,
            [TOUCH.END]: createInputFromTouch,
            [TOUCH.CANCEL]: createInputFromTouch,
            [MOUSE.DOWN]: createInputFromMouse,
            [MOUSE.MOVE]: createInputFromMouse,
            [MOUSE.UP]: createInputFromMouse
        };

        // 绑定事件
        if (void 0 !== el) {
            // 观察了几个移动端组件, 作者都会加webkitTapHighlightColor
            // 比如vant ui
            // 所以在此作为默认值
            // 使用者也可通过at.el改回去
            el.style.webkitTapHighlightColor = 'rgba(0,0,0,0)';
            // 校验是否支持passive
            let supportsPassive = false;
            try {
                const opts = {};
                Object.defineProperty(opts, 'passive', ({
                    get() {
                        // 不想为测试暴露, 会增加体积, 暂时忽略
                        /* istanbul ignore next */
                        supportsPassive = true;
                    }
                }));
                window.addEventListener('_', () => void 0, opts);
            } catch { }
            // 绑定元素
            on(
                'unbind',
                bindElement(
                    el,
                    catchEvent,
                    !_options.isPreventDefault && supportsPassive ? { passive: true } : false
                )
            );
        }

        /**
         * 使用插件
         * @param plugin 
         * @param recognizerOptions 
         */
        function use(plugin: RecognizerFunction, recognizerOptions?: RecognizerOptions) {
            const recognizer = plugin(recognizerOptions)
            recognizers.push(recognizer);
            const { name } = recognizer[0];
            const computeFunctions = recognizer[2]
            recognizerMap[name] = recognizer[0];
            // 计算函数集合
            computeFunctions.forEach(computeWrapFunction => {
                const { _id } = computeWrapFunction
                // 初始化计算函数
                _computeFunctionMap[_id] = computeWrapFunction();
            });
        }

        /**
         * 事件拦截器
         * @param hook 钩子函数
         */
        function beforeEach(hook: (recognizer: RecognizerContext, next: () => void) => void): void {
            _beforeEachHook = hook;
        };

        /**
         * 监听input变化s
         * @param event Touch / Mouse事件对象
         */
        function catchEvent(event: SupportEvent): void {
            if (canPreventDefault(event, _options)) {
                event.preventDefault();
            }

            const input = _inputCreatorMap[event.type as (TOUCH | MOUSE)](event);

            // 跳过无效输入
            // 比如没有按住鼠标左键的移动会返回undefined
            if (void 0 !== input) {
                const AT = `at`;
                const AT_WITH_STATUS = AT + ':' + input.stage;
                $emit(AT, input as AnyTouchEvent);
                $emit(AT_WITH_STATUS, input as AnyTouchEvent);

                const { domEvents } = _options;
                if (false !== domEvents) {
                    const { target } = event;
                    if (null !== target) {
                        dispatchDomEvent(target, { ...input, type: AT }, domEvents);
                        dispatchDomEvent(target, { ...input, type: AT_WITH_STATUS }, domEvents);
                    }
                }

                // input -> computed
                const computed = input as Computed;
                for (const k in _computeFunctionMap) {
                    const f = _computeFunctionMap[k];
                    Object.assign(computed, f(computed));
                }

                // 缓存每次计算的结果
                // 以函数名为键值
                for (const [context, recognize] of recognizers) {
                    // if (recognizer.disabled) continue;
                    // 恢复上次的缓存
                    const { name } = context;
                    recognize(computed, (type: string) => {
                        // 此时的e就是this.computed
                        const payload = { ...computed, type, name };

                        // 防止数据被vue类框架拦截
                        Object?.freeze(payload);

                        if (void 0 === _beforeEachHook) {
                            _emit2(payload);
                        } else {
                            _beforeEachHook(context, () => {
                                _emit2(payload);
                            });
                        }
                    });
                }
            }
        };

        function _emit2(payload: AnyTouchEvent) {
            const AT_AFTER = 'at:after';
            const { type, target } = payload;
            $emit(type, payload);
            $emit(AT_AFTER, payload);
            // 触发DOM事件
            if (!!_options.domEvents
                && void 0 !== el
                && null !== target
            ) {
                // vue会把绑定元素的所有子元素都进行事件绑定
                // 所以此处的target会自动冒泡到目标元素
                dispatchDomEvent(target, payload, _options.domEvents);
                dispatchDomEvent(target, { ...payload, _type: payload.type, type: AT_AFTER }, _options.domEvents);
            }
        };

        function target(el: HTMLElement) {
            return {
                on: (eventName: string, listener: Listener<AnyTouchEvent>): void => {
                    on(eventName, listener, event => {
                        const { targets } = event;
                        // 检查当前触发事件的元素是否是其子元素
                        return event.target === el &&
                            targets.every((target) => el.contains(target as HTMLElement))
                    });
                }
            };
        };

        /**
         * 获取识别器通过名字
         * @param name 识别器的名字
         * @return 返回识别器
         */
        function get(name: string): RecognizerContext | void {
            return recognizerMap[name];
        };
        /**
             * 设置
             * @param options 选项
             */
        function set(options: Options) {
            _options = { ..._options, ...options };
        };


        /**
         * 删除识别器
         * @param at AnyTouch实例
         * @param recognizerName 手势名
         */
        function removeUse(recognizerName?: string): void {
            // 如果没有传入指定手势名称
            // 那么删除所有手势识别器
            if (void 0 === recognizerName) {
                recognizers = [];
                recognizerMap = {};
            } else {
                for (const [index, [context]] of recognizers.entries()) {
                    if (recognizerName === context.name) {
                        recognizers.splice(index, 1);
                        delete recognizerMap[recognizerName];
                        break;
                    }
                }
            }
        };

        /**
        * 销毁
        */
        function destroy() {
            // 解绑事件
            $emit('unbind');
            destroyAE();
        };

        return {
            target,
            destroy,
            use,
            get,
            set,
            beforeEach,
            removeUse,
            recognizers,
            recognizerMap,
            catchEvent,
            on,
            off
        };
    }

    AnyTouch.version = '__VERSION__';
    return AnyTouch;
}

export default createAnyTouch();