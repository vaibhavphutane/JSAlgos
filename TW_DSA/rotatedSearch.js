const array = [11, 10, 9, 8, 1, 2, 3, 4, 5, 6, 7];

let rotation = 0;
for (let i=0; i < array.length; i++) {
  array[i];
  if (array[i] < array[i + 1]) {
    rotation = i;
    break;
  }
}
console.log(rotation);
