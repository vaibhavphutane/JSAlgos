const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    const mid = Math.round((right + left) / 2);
    if (arr[mid] === value)
      return mid;
    if (value > arr[mid])
      left = mid + 1;
    if (value < arr[mid])
      right = mid - 1;
  }
  return -1;
}

const index = binarySearch([1,2,3,4,5,7,8,9,11,12,15,16,17,18,19], 1);
console.log(index);
