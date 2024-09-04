// Hoisting
console.log(a);
let a = 5;

// During the creation phase, variables declared with let, const and class are "hoisted" to the top of their scope (like variables declared with var), but they are not initlizaed. This means they exist in memory but cannot be accessed until the code execution reaches their declaration

// The time between the beginning of the scope and the actual declaration in the code is the Temporal Dead Zone for that variable.

// If you try to access or use a variable that's in the TDZ, JavaScript throws a ReferenceError.

// The TDZ ends as soon as the variable is declared 


/* sayHi();

function sayHi(){
    console.log(`Hey Hi, How are you ??`);
    
} */

sayHi();

var sayHi = function () {
  console.log(`Hi Hey`);
};
