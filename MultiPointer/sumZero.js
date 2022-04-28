const data = [-4, -3, -2, -1, 0, 1, 2, 5];

const sumZero = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while(i < j) {
    const a = arr[i];
    const b = arr[j];
    if(a + b === 0) {
      return [a, b];
    }
    if(a + b > 0) {
      j--;
    }
    if(a + b < 0) {
      i++;
    }
  }
}

console.log(sumZero(data));

