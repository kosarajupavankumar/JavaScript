// Primitive Data Types:

// Number
// String
// Boolean
// Null
// Undefined

// new primitive types :
// BigInt
// Symbol




// numbers
let a = 20;
let b = 10000;
let c = 12.67;
let d = -10.67;

console.log(typeof a, typeof b, typeof c, typeof d);

// strings

let str = "javaScript";
let str2 = "Hello";

let statement = `My name is pavan
working in accenture`; // template literal

console.log(statement);
console.log(typeof str, typeof str2);

// Boolean

let isEven = true;
let isOdd = false;

console.log(typeof isEven, typeof isOdd);

// null and undefined
// undefined : THis value is automcatically assigned to variables that have been decalred but not yet initialized with a value.
// It is also the default return value of functions that do not explicity return a value.
let x;
console.log(x);
console.log(typeof x);

function foo() {}

console.log(foo());

// null : This is a value that represents the intentional absence of any object value. It needs to be explicitly assigned to a varible.
// It is often used to indicate that a vararible is itentianally emoty or has no value.

let y = null;
console.log(y);
console.log(typeof y); // object

// backward Compatiblity : Changing the behviour of typeof null would potentially break existing code that relies on it returning "object". To maintain backward compantility and not introduce breaking changes, javascript engines have kept this behaviour consistent over the years.

// null is still a primitive value, not an object. It's just that the type of operator doesnot always reflect this accuraltely.


// Importance of the semicolon

function fun() {
  return;
  hello;
}

console.log(fun());
