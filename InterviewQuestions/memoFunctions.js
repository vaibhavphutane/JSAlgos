// Write the Higher-Order function that memorizes, time taking complicated solutions, given that parameters are not changed.

function sleep(ms) {
  var start = new Date().getTime(), expire = start + ms;
  while (new Date().getTime() < expire) { }
  return;
}

function add(a, b){
  sleep(5000);
  return a + b;
}
  

function memorize(cb) {
  let result = {};
  return function(...args) {
    const hash = args.join(',');
    if(result[hash]) {
      return result[hash];
    }
    const computedResult = cb(...args);
    result[hash] = computedResult;
    return computedResult;
  }
}
  
const addCached = memorize(add);
console.log(addCached(2, 3));
console.log(addCached(2, 3));

// Expected output
// first 5 should print after 5 sencond 
// second 5 should print immediately

