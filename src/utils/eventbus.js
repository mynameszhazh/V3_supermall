/**
 * 作为一个事件总线的替代啊方案这样
 */
import mitt from 'mitt';

const emitter = mitt();

export default emitter;