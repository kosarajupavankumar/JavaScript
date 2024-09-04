// Functions are first class citizens in the javascript
// ways of defining the javascript

//calling function
function sayHi() {
  console.log(`mrinal says hi`);
}

sayHi();

let x = 5;

// Function expressions
let sayMyName = function () {
  console.log(`My Name is super man`);
};

sayMyName();

function add(a, b) {
  return a + b;
}

console.log(add(3, 5));

// you can return functions from functions
function parent() {
  return function () {
    console.log(`I am being returned from the parent function`);
  };
}

let y = parent();
y();

// you can even pass function as arguments to functions
function add(a, b) {
  return a + b;
}

function average(a, b, fn) {
  return fn(a, b) / 2;
}

const answer = average(5, 9, add);
console.log(answer);
console.log(typeof parent);

var sayHi = function () {
  console.log(`pavan says Hi`);
};

var anotherSayHi = sayHi;

console.log(anotherSayHi === sayHi);
