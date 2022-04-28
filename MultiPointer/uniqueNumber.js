const a = [1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 6, 7];
// const a = [];
// const a = [-2, -1, -1, 0, 1];

const uniqueNumber = (arr) => {
  if (!arr.length) {
    return 0;
  }
  let i = 0;
  let j = 1;
  while (i < j && j < arr.length) {
    if (!(arr[i] === arr[j])) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
};

console.log(uniqueNumber(a));
