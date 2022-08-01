// Write the polifill for faltten
Array.prototype.flatten = function (flatArray = []) {
  const arr = this;
  if (!this.length)
    return;

  if (Array.isArray(arr[0])) {
    arr[0].flatten(flatArray);
  } else {
    flatArray.push(arr[0]);
  }

  arr.splice(0, 1)
  arr.flatten(flatArray);

  return flatArray;
}

// console.log([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]].flatten());
// Expected output [1, 2, 3]


// Write the polyfill for reduce

Array.prototype.myReduce = function myReduce(callbackFn, intialValue) {
  const arr = this;
  let acc = intialValue;
  for (let element of arr) {
    acc = callbackFn(acc, element);
  }
  return acc;
}

// console.log([1,2,3,4].myReduce((acc, value) => { return acc * value }, 1))
// Expected output 24

// console.log([1,2,3,4].myReduce((acc, value) => { return acc + value }, 1))
// Expected output 10


// Write polyfill for Promise.all

Promise.all = function (promises) {
  let resolvedPromisesCount = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      reject('Please provide at least one promise to resolve');
    }
    for (let promise of promises) {
      promise.then(function (res) {
        resolvedPromisesCount++;
        result.push(res);
        if (resolvedPromisesCount === promises.length) {
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
      });
    }
  });
};

1
2
3
4

{

}

// Promise.all([
//   new Promise(resolve => resolve(1)),
//   new Promise(resolve => resolve(2)),
//   new Promise(resolve => resolve(3)),
// ]).then(res => {
//   console.log(res);
// })
// Expected output [1,2,3]


