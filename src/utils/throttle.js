// 时间戳版
/**
 * @desc 固定的时间触发 利用时间戳完成
 * @param {函数} func 
 * @param {时间} wait 
 * @returns 
 */
export function dateThrottle(func, wait) {
  let previous = 0;
  return function() {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

/**
 * @desc 固定的时间触发 利用定时器完成
 * @param {函数} func 
 * @param {时间} wait 
 * @returns 
 */
export function stoThrottle(func, wait) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}


/**
 * @desc 函数节流合成版
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
 export default function throttle(func, wait, type) {
  if (type === 1) {
    let previous = 0;
  } else if (type === 2) {
    let timeout;
  }
  return function() {
    let context = this;
    let args = arguments;
    if (type === 1) {
        let now = Date.now();
 
        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args)
        }, wait)
      }
    }
  }
}