/*
* ==================== 支持的手势 ====================
* rotate 旋转
* pinch 捏合,
* tap 点击
* press 按压
* pan 拖拽
* swipe 快划
*/


import { createAnyTouch } from '@any-touch/core';
import Tap from '@any-touch/tap';
import Pan from '@any-touch/pan';
import Swipe from '@any-touch/swipe';
import Press from '@any-touch/press';
import Pinch from '@any-touch/pinch';
import Rotate from '@any-touch/rotate';
import { RecognizerFunction, RECOGNIZER_STATUS } from '@any-touch/shared';

interface AnyTouchFunction extends ReturnType<typeof createAnyTouch>{
    Tap: RecognizerFunction;
    Pan: RecognizerFunction;
    Swipe: RecognizerFunction;
    Press: RecognizerFunction;
    Pinch: RecognizerFunction;
    Rotate: RecognizerFunction;
    STATUS_POSSIBLE: RECOGNIZER_STATUS.POSSIBLE;
    STATUS_START: RECOGNIZER_STATUS.START;
    STATUS_MOVE: RECOGNIZER_STATUS.MOVE;
    STATUS_END: RECOGNIZER_STATUS.END;
    STATUS_CANCELLED: RECOGNIZER_STATUS.CANCELLED;
    STATUS_FAILED: RECOGNIZER_STATUS.FAILED;
    STATUS_RECOGNIZED: RECOGNIZER_STATUS.RECOGNIZED;
}


const AnyTouch = createAnyTouch([Tap, Pan, Swipe, Press, Pinch, Rotate]) as Partial<AnyTouchFunction>;
AnyTouch.Tap = Tap;
AnyTouch.Pan = Pan;
AnyTouch.Swipe = Swipe;
AnyTouch.Press = Press;
AnyTouch.Pinch = Pinch;
AnyTouch.Rotate = Rotate;
AnyTouch.STATUS_POSSIBLE = RECOGNIZER_STATUS.POSSIBLE;
AnyTouch.STATUS_START = RECOGNIZER_STATUS.START;
AnyTouch.STATUS_MOVE = RECOGNIZER_STATUS.MOVE;
AnyTouch.STATUS_END = RECOGNIZER_STATUS.END;
AnyTouch.STATUS_CANCELLED = RECOGNIZER_STATUS.CANCELLED;
AnyTouch.STATUS_FAILED = RECOGNIZER_STATUS.FAILED;
AnyTouch.STATUS_RECOGNIZED = RECOGNIZER_STATUS.RECOGNIZED;
export default AnyTouch;