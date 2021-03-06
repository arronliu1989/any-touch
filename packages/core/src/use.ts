import AnyTouch from './index';
import Recognizer from '@any-touch/recognizer';
type C = typeof AnyTouch;
type I = InstanceType<C>;
/**
 * 触发dom事件
 * @param atOrAT AnyTouch或者其实例
 * @param Recognizer 识别器
 * @param options 识别器参数
 */
export function use(
    atOrAT: C | I,
    Recognizer: new (...args: any) => Recognizer,
    recognizerOptions?: Record<string, any>): void {
    const name = recognizerOptions?.name;
    // 保证同一个事件只对应一个识别器
    if (void 0 !== name && void 0 !== atOrAT.recognizerMap[name]) return;

    const recognizer = new Recognizer(recognizerOptions);

    // 初始化计算函数
    for (const createComputeFunction of recognizer.computeFunctions) {
        const { _id } = createComputeFunction;
        if (void 0 === atOrAT.computeFunctionMap[_id]) {
            // 创建计算函数
            // 区分是实例的use还是构造函数的use
            atOrAT.computeFunctionMap[_id] = 'version' in atOrAT ? createComputeFunction : createComputeFunction();
        }
    }

    // 识别器管理
    // recognizer.name是默认值或者options给定
    atOrAT.recognizerMap[recognizer.name] = recognizer;
    recognizer.recognizerMap = atOrAT.recognizerMap;
    atOrAT.recognizers.push(atOrAT.recognizerMap[recognizer.name]);
};

/**
 * 删除识别器
 * @param atOrAT AnyTouch或者其实例
 * @param recognizerName 手势名
 */
export function removeUse(atOrAT: C | I, recognizerName?: string): void {
    // 如果没有传入指定手势名称
    // 那么删除所有手势识别器
    if (void 0 === recognizerName) {
        atOrAT.recognizers = [];
        atOrAT.recognizerMap = {};
    } else {
        for (const [index, recognizer] of atOrAT.recognizers.entries()) {
            if (recognizerName === recognizer.options.name) {
                atOrAT.recognizers.splice(index, 1);
                delete atOrAT.recognizerMap[recognizerName];
                break;
            }
        }
    }
};
