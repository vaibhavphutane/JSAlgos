// crate Pipe function
// should execute functions from left to right


const getName = (nameObj) => nameObj.name;
const uppercase = (str) => str.toUpperCase();
const first7Chars = (str) => String(str).substring(0, 7);

const pipe = (...functions) => (arg) => {
  let result = arg; 
  for(let fn of functions) {
    result = fn(result);
  }
  return result;
}

// Using reduce
// const pipe = (...functions) => (arg) => functions.reduce((result, fn) => fn(result), arg)

console.log(pipe(getName, uppercase, first7Chars)({ name: 'Thoughtworks' }));
// Expected output THOUGHT


// Create Compose function
// should execute functions from right to left


const compose = (...functions) => (arg) => functions.reduceRight((result, fn) => fn(result), arg); 

console.log(compose(first7Chars, uppercase, getName)({ name: 'Thoughtworks' }));
// Expected output THOUGHT

