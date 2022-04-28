// SAMPLE INPUT / OUTPUT



const isOdd = val => val % 2 !== 0;

function someRecursive(arr, isOdd){
  // add whatever parameters you deem necessary - good luck!
  if(!arr.length) 
  return false
  
  const number = arr.pop();
  if(isOdd(number))
  return true;
  
  return someRecursive(arr, isOdd);
}

const result = someRecursive([4,6,8], isOdd) 
console.log(result);
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false