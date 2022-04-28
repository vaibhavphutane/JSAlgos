const maxSubArraySum = (arr, n) => {
  let max = Infinity;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = 0; i < arr.length - n; i++) {
    sum = sum - arr[i] + arr[i+n];
    if(sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3));
