const debounce = (func, wait) => {
  let timer= null;
  return (...args) => { 
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  }
}

const debouncedPrint = debounce(() => {console.log('called')}, 1000);

debouncedPrint();

