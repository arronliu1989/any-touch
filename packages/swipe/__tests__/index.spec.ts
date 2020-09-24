import { create } from '@testUtils';
import Swipe from '@any-touch/swipe';
import AnyTouch from '@any-touch/core';
import { GestureSimulator, sleep } from '@any-touch/simulator';
const SWIPE_NAME = 'swipe';

test(`向下划`, async done => {
    const { mockCB } = create();
    const el = document.createElement('div');
    const at = AnyTouch(el);
    at.use(Swipe);
    const gs = new GestureSimulator(el);
    at.on(SWIPE_NAME, mockCB);

    gs.dispatchTouchStart([{ x: 0, y: 0 }]);
    await sleep(20)
    gs.dispatchTouchMove([{ x: 0, y: 10 }]);
    await sleep(20)
    gs.dispatchTouchMove([{ x: 0, y: 100 }]);
    await sleep(20)
    gs.dispatchTouchEnd();
    await sleep();
    expect(mockCB).toHaveBeenCalledTimes(1);
    done();
});