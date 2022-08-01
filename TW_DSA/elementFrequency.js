// O(n) time | O(n) space
const array = [2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9];

const printFrequency = (array) => {
  const dictionary = {};
  for(const el of array) {
    dictionary[el] = (dictionary[el] || 0) + 1;
  }
  console.table(dictionary);
}

printFrequency(array);