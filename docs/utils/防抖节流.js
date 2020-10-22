// 代理模式
function Debounce(fn, wait, flag) {
  let timeout;
  return function () {
    let self = this;
    clearTimeout(timeout);
    if (flag) {
      let callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        fn.apply(self);
      }
    } else {
      timeout = setTimeout(function () {
        fn.apply(self);
      }, wait);
    }
  }
}


// 待验证
function Throttle(fn, wait) {
  let timeout;
  return function(){
    let self = this;
    let callNow = !timeout;
    timeout = setInterval(() => {
      timeout = null;
    }, wait);
    if (callNow) {
      fn.apply(self);
    }
  }
}

// 节流
function Throttle(fn, wait) {
  let timeout = 0;
  return function(){
    let self = this;
    let callNow = new Date();
    if (callNow-timeout > wait) {
      fn.apply(self);
      timeout = callNow;
    }
  }
}