function flatten(arr, result = []) {
  if (!arr.length)
    return;

  if (Array.isArray(arr[0])) {
    flatten(arr[0], result);
  } else {
    result.push(arr[0]);
  }

  flatten(arr.slice(1), result);

  return result;

}

const result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3, 4, 5]
console.log(result);
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3