// Global this
// Expected output Thoughtworks

function name() {
  this.name = 'Thoughtworks';
}
name();

console.log(this.name);



// Closure
// Expected output 300
function fun(num1) {
  var num2 = 6;
  function multiply() {
      var num3 = 10;
      console.log(num1 * num2 * num3)
  }
  return multiply;
}

var mul = fun(5)
mul();

// Expected output undefined is known for his culture and values
const animal = {
  name: "Thoughtworks",
  action: function () {
    console.log(`${this.name} is known for his culture and values`);
  }
};
setTimeout(animal.action, 1000);

// Function currying 

// sum(1)(2)(3)(4)()
// Expected output 10
//  sum(1)(2)(3)(4)......(n)
// Expected output 1 + 2 + 3 .... + n


const sum = (a) => {
  return (b) => { 
    if(!b)
      return a;
    return sum(a+b);
  }
}

// console.log(sum(1)(2)(3)(4)());


