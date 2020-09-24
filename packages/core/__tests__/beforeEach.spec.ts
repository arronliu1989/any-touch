import AnyTouch from '@any-touch/core';
import {RECOGNIZER_STATUS} from '@any-touch/shared';

import Tap from '@any-touch/tap';
import { GestureSimulator, sleep } from '@any-touch/simulator';
import debounce from 'lodash/debounce'
test(`tap延迟300ms触发, 如果届时doubletap状态为"失败或可能"那么触发tap`, async (done) => {


    const el = document.createElement('div');
    const gs = new GestureSimulator(el);
    const at = AnyTouch(el);
    at.use(Tap);
    at.use(Tap, { name: 'doubletap', tapTimes: 2 });
    const onTap = jest.fn();
    const onDoubleTap = jest.fn();
    at.beforeEach(({ name }:any, next:any) => {
        if ('tap' === name) {
            debounce(() => {
                if ([RECOGNIZER_STATUS.POSSIBLE,RECOGNIZER_STATUS.FAILED].includes(at.recognizerMap.doubletap.status)) next();
            }, 300);
        } else {
            next();
        }
    });
    at.on('tap', onTap);
    at.on('doubletap', onDoubleTap);

    gs.dispatchTouchStart();
    gs.dispatchTouchEnd();
    gs.dispatchTouchStart();
    gs.dispatchTouchEnd();
    await sleep(310);
    expect(onTap).toHaveBeenCalledTimes(0);
    expect(onDoubleTap).toHaveBeenCalledTimes(1);
    await sleep();
    done();
});