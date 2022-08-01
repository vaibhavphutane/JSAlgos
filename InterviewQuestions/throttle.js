const throttle = (func, limit) => { 
  let called = false;
  let timer = null;
  return (...args) => {
    if(called) return;
    func(...args);
    called = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      called = false;
    }, limit);
  }
}

const throttledPrint = throttle(() => {console.log('called')}, 1000);

throttledPrint();
throttledPrint();
throttledPrint();
throttledPrint();
