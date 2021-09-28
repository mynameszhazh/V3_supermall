
/**
 * @desc  不会立即触发，等到所有的事件触发完毕间隔触发事件后触发
 * @param {带传入的函数} func 
 * @param {触发时间} wait 
 * @returns 
 */
export function debounces(func, wait) {
  let timer;
  return function() {
    let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e
       
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

/**
 * @desc  触发事件之后会立即执行，但是要过一段时间才能进行下一次触发
 * @param {带传入的函数} func 
 * @param {触发时间} wait 
 * @returns 
 */
export function intervalDebounce(func, wait) {
  let timer;
  return function() {
    let context = this; // 这边的 this 指向谁?
    let args = arguments; // arguments中存着e

    if (timer) clearTimeout(timer);

    let callNow = !timer;

    timer = setTimeout(() => {
      timer = null;
    }, wait)

    if (callNow) func.apply(context, args);
  }
}


// 合成版
/**
   * @desc 函数防抖
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
 export default function debounce(func, wait, immediate = false) {
  let timer;
  return function() {
    let context = this,
        args = arguments;
         
    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer  = setTimeout(() => {
        func.apply(context, args);
      }, wait)
    }
  }
}