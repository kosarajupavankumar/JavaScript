# 1. Compare the differences between let, var, and const when declaring variables in JavaScript.

# JavaScript Variable Declarations: `let`, `var`, and `const`

In JavaScript, `let`, `var`, and `const` are used to declare variables, but they have some differences in terms of scoping, hoisting, and mutability. Let's explore each one separately:

## `var`

### Example 1

```javascript
var x = 10;
if (true) {
  var x = 20;
  console.log(x); // 20
}
console.log(x); // 20
```

### Example 2

```javascript
console.log(y); // undefined
var y = 70;
console.log(y); // 70
```

- **Scope**: `var` is function-scoped. It means that the variable is visible throughout the entire function in which it is declared.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope. This means you can use the variable before it's declared, but it will have an initial value of `undefined`.
- **Reassignment**: Variables declared with `var` can be redeclared and reassigned.

## `let`

### Example 1

```javascript
let a = 10;
if (true) {
  let a = 20;
  console.log(a); // 20
}
console.log(a); // 10
```

### Example 2

```javascript
// ReferenceError: Cannot access 'b' before initialization
console.log(b);
let b = 5;
console.log(b); // 5
```

- **Scope**: `let` is block-scoped. It means that the variable is only visible within the block, statement, or expression where it is defined.
- **Hoisting**: Variables declared with `let` are hoisted to the top of their block, but they are not initialized. Accessing the variable before its declaration results in a ReferenceError as they get in an area called `Temporal Dead Zone`.
- **Reassignment**: Variables declared with `let` can be reassigned, but not redeclared in the same scope.

## `const`

### Example 1

```javascript
const PI = 3.14;
// SyntaxError: Assignment to constant variable
PI = 3.14159;
```

- **Scope**: `const` is also block-scoped.
- **Hoisting**: Like `let`, variables declared with `const` are hoisted to the top of their block, but they are not initialized. Accessing the variable before its declaration results in a ReferenceError as they get in an area called Temporal Dead Zone.
- **Reassignment**: Variables declared with `const` cannot be reassigned. They are constants. However, if the variable is an object or an array, the properties or elements of the object/array can be modified.

## Summary

- Use `var` when you need function-scoping (though it's less common nowadays).
- Use `let` when you need block-scoping and plan to reassign the variable.
- Use `const` when you need block-scoping and the variable should not be reassigned.

# 2. What is Hoisting in JS?

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or a function before it's declared in your code. However, it's important to note that only the declarations are hoisted, not the initializations.

Let's go through some examples to illustrate hoisting in JavaScript:

## Example 1: Variable Hoisting

```javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

In this example, the variable `x` is hoisted to the top of its scope during the compilation phase. The first `console.log` outputs `undefined` because the declaration is hoisted, but the initialization (`x = 5`) is not hoisted. The second `console.log` outputs `5` after the variable has been initialized.

## Example 2: Function Hoisting

```javascript
sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

In this example, the function `sayHello` is hoisted to the top of its scope. That's why we can call the function before its declaration. The output is "Hello, World!" as expected.

## Example 3: Hoisting with Function Expressions

```javascript
greet(); // TypeError: greet is not a function

var greet = function () {
  console.log("Hello!");
};
```

In this case, the variable `greet` is hoisted, but since it's assigned a function expression (not a function declaration), the assignment is not hoisted. Therefore, when we try to call `greet()` before the assignment, we get a `TypeError` because `greet` is `undefined` at that point.

## Example 4: Hoisting Inside Functions

```javascript
function example() {
  console.log(a); // Output: undefined
  var a = 10;
  console.log(a); // Output: 10
}

example();
```

Even within functions, variables are hoisted to the top of their scope. In this example, the variable `a` is hoisted within the function `example`.

It's important to understand hoisting in JavaScript, but it's generally considered good practice to declare and initialize variables at the beginning of their scope to avoid confusion and potential issues.

# 3. What is the Temporal Dead Zone in JS?

The "temporal dead zone" (TDZ) in JavaScript refers to the period between entering a scope and the actual declaration of a variable with `let` or `const`, during which accessing the variable results in a `ReferenceError`. Let's break it down with some code examples:

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

In this example, even though `x` is declared later in the code, trying to access it before the declaration causes a `ReferenceError`. This is because `x` is in the temporal dead zone until the `let` initialization is encountered.

The same thing happens with `const` as well!

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 20;
```

In this example, `y` is in the temporal dead zone until the `const` initialization is encountered, resulting in a `ReferenceError` if accessed before its declaration.

# 4. What is Lexical Scope and Scope Chain in JS?

Let's illustrate lexical scoping and the scope chain with an example:

```javascript
function outerFunction() {
  var outerVar = "I'm outer";

  function innerFunction() {
    var innerVar = "I'm inner";
    console.log(outerVar); // Output: I'm outer
  }

  innerFunction();
}

outerFunction();
```

In this example, `innerFunction` has access to the variable `outerVar` declared in its outer scope (`outerFunction`), but not vice versa. This is because of lexical scoping. The inner function has access to variables declared in its parent functions due to the lexical environment in which it is defined.

The scope chain in this example can be visualized as follows:

- **Global Scope**
  - Contains built-in objects and functions like `console`.
- **outerFunction Scope**
  - Contains `outerVar`.
  - Outer scope of `innerFunction`.
- **innerFunction Scope**
  - Contains `innerVar`.
  - Inner scope of `outerFunction`.

When `innerFunction` tries to access `outerVar`, JavaScript first looks for `outerVar` in its local scope. If it doesn't find it there, it looks in the scope of its parent function, which is `outerFunction`'s scope. If `outerVar` is still not found there, it continues up the scope chain until it reaches the global scope.

So, in this case, `outerVar` is found in `outerFunction`'s scope, and that's where the value is retrieved from. If the value is not found anywhere up in the hierarchy, then an error is returned.

# 5. What are Closures in JS and how they are formed?

In JavaScript, closure is a fundamental concept that arises from the combination of lexical scope and function definitions.

Lexical scope refers to the idea that a function's scope is determined by its surrounding code at the time of its definition, not at the time of its execution. This means that a function "remembers" the variables that were in scope at the time it was defined, even if it is executed in a different scope.

The scope chain is the mechanism by which JavaScript resolves variable names. When a variable is referenced inside a function, JavaScript first looks for that variable within the function's own scope. If it's not found there, it looks in the next outer scope, and so on, until it reaches the global scope.

Now, when a function is defined within another function, it forms a closure. This means that the inner function has access to the outer function's variables, even after the outer function has finished executing. This is possible because the inner function maintains a reference to the variables in the outer function's scope, creating a closure over those variables.

Here's an example to illustrate:

```javascript
function outer() {
  var outerVar = "I'm in the outer function";

  function inner() {
    console.log(outerVar); // inner function has access to outerVar
  }

  return inner;
}

var closureFunc = outer(); // outer function has finished executing, but inner function maintains a reference to outerVar
closureFunc(); // Outputs: "I'm in the outer function"
```

In this example, `inner()` forms a closure over the variable `outerVar`, even though `outer()` has already finished executing. This is possible because `inner()` maintains a reference to `outerVar` through the closure, allowing it to access the variable's value when it's called later on.

So, in summary, closure in JavaScript is the combination of lexical scope and function definitions, allowing inner functions to maintain access to variables in their outer scope even after the outer function has finished executing.

# 6. What are Higher Order Functions and what are the advantages of using Higher order functions?

In JavaScript, a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result, or both. Essentially, it treats functions as first-class citizens, allowing them to be manipulated and passed around as data. Here's a simple example:

```javascript
// Higher-order function example
function applyOperation(operation, x, y) {
  return operation(x, y);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(applyOperation(add, 5, 3)); // Output: 8
console.log(applyOperation(subtract, 5, 3)); // Output: 2
```

In this example, `applyOperation` is a higher-order function because it takes another function (`operation`) as an argument.

## Advantages of using higher-order functions:

- **Code Reusability**: Higher-order functions promote code reuse by allowing you to abstract common functionality into separate functions. This can lead to more concise and maintainable code.
- **Abstraction**: They allow you to abstract over actions, promoting a more declarative and expressive coding style.
- **Encapsulation**: Higher-order functions can encapsulate complex behavior, making it easier to understand and reason about the code.
- **Functional Composition**: They facilitate functional composition, enabling you to build complex functions by composing simpler ones together.
- **Flexibility and Extensibility**: Higher-order functions make your code more flexible and extensible by enabling you to pass behavior as arguments or return it as a result.

Overall, higher-order functions are a powerful feature of JavaScript that can lead to more modular, flexible, and expressive code.

# 7. Explain `map`, `filter`, and `reduce` in JS

In JavaScript, `map`, `filter`, and `reduce` are powerful array methods used for manipulating arrays and performing operations on their elements.

## `map`

The `map` method creates a new array by applying a function to each element of the original array. It does not modify the original array.

### Example 1: Doubling each number

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

### Example 2: Converting each number to a string

```javascript
const numbers = [1, 2, 3, 4, 5];
const stringNumbers = numbers.map((num) => num.toString());
console.log(stringNumbers); // Output: ['1', '2', '3', '4', '5']
```

## `filter`

The `filter` method creates a new array with all elements that pass the test implemented by the provided function, based on a condition.

### Example 1: Filtering even numbers

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### Example 2: Filtering numbers greater than 3

```javascript
const numbers = [1, 2, 3, 4, 5];
const greaterThanThree = numbers.filter((num) => num > 3);
console.log(greaterThanThree); // Output: [4, 5]
```

## `reduce`

The `reduce` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

### Example 1: Summing all numbers

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
```

### Example 2: Concatenating all numbers as a string

```javascript
const numbers = [1, 2, 3, 4, 5];
const concatenatedString = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue.toString(),
  ""
);
console.log(concatenatedString); // Output: '12345'
```

In each example:

- `map` transforms each element of the array according to the function provided.
- `filter` selectively includes elements from the original array based on a condition defined by the provided function.
- `reduce` iterates over each element of the array, accumulating a final result based on the logic defined in the provided function.

# 8. What are pure and impure functions in JS?

In JavaScript, pure functions and impure functions serve different purposes and have distinct characteristics:

## Pure Functions

- A pure function is a function where the return value is determined only by its input values, without observable side effects.
- It doesn't modify variables outside of its scope or perform any I/O operations.
- Given the same input, a pure function will always return the same output.
- Pure functions are predictable and easier to test.

### Example of a Pure Function

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

In this example, the `add` function takes two parameters and returns their sum. It doesn't modify any variables outside its scope, and given the same inputs, it always produces the same output.

## Impure Functions

- An impure function is a function that may produce side effects or depends on external factors.
- It can modify variables outside of its scope, perform I/O operations, or rely on mutable data.
- Impure functions may not always produce the same output for the same input, making them less predictable.

### Example of an Impure Function

```javascript
let result = 0;

function impureAdd(a) {
  result += a; // Modifying external variable 'result'
  return result;
}

console.log(impureAdd(2)); // Output: 2
console.log(impureAdd(3)); // Output: 5
```

In this example, `impureAdd` modifies the external variable `result` each time it's called. The output of the function depends not only on its input but also on the current state of `result`, making it impure.

## Summary

- Pure functions are predictable and have no side effects.
- Impure functions may have side effects and rely on external factors.

# 9. What are Imperative and Declarative Ways of Writing Code?

Let's compare imperative and declarative styles of writing code in JavaScript, particularly focusing on functions.

## Imperative Programming

In imperative programming, you define the exact steps to achieve a desired result. This often involves explicitly stating how to do something, step by step.

### Example

```javascript
// Imperative approach to finding the sum of an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

In this imperative style, we explicitly loop through the array, keeping track of the sum by accumulating it with each element.

## Declarative Programming

In declarative programming, you focus more on what you want to achieve rather than how to achieve it. You describe the desired result without specifying the exact steps.

### Example

```javascript
// Declarative approach to finding the sum of an array using Array.reduce()
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

In this declarative style, we use the `reduce()` method, which takes a callback function and an initial value. It abstracts away the looping process and accumulates the sum for us.

## Comparison

- **Imperative**: Focuses on the detailed steps of how to achieve a task. It often involves mutable state and explicit control flow (loops, conditionals).
- **Declarative**: Focuses on the desired result or outcome. It often involves higher-order functions and functional composition, abstracting away implementation details.

While imperative programming emphasizes the "how," declarative programming emphasizes the "what." Declarative code tends to be more concise and easier to understand once you're familiar with the paradigms and functions being used.

# 10. What is Destructuring in JS?

Destructuring in JavaScript is a concise way to extract values from arrays or properties from objects and assign them to variables. It allows you to unpack values from arrays or objects into distinct variables, making your code cleaner and more readable.

## Array Destructuring

```javascript
// Example array
const myArray = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...rest] = myArray;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

In this example, `first` and `second` variables capture the first two elements of the array `myArray`, and the `rest` variable captures the rest of the elements using the rest syntax (`...`).

## Object Destructuring

```javascript
// Example object
const myObject = {
  name: "John",
  age: 30,
  country: "USA",
};

// Destructuring assignment
const { name, age, country } = myObject;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(country); // Output: USA
```

In this example, `name`, `age`, and `country` variables capture the corresponding properties of the `myObject`.

## Nested Destructuring

```javascript
// Nested object
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Destructuring assignment with nested objects
const {
  name,
  age,
  address: { city, country },
} = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(city); // Output: New York
console.log(country); // Output: USA
```

In this example, `city` and `country` variables are extracted from the nested `address` object within the `person` object.

Destructuring provides a cleaner syntax for extracting values from arrays and objects, improving code readability.

# 11. How Does the `this` Keyword Work in JS?

The `this` keyword refers to the context in which a function is executed. Its value depends on how a function is called.

In JavaScript, the value of `this` is determined by the invocation context of the function and can vary based on how a function is called:

## Global Context

When used in the global scope (outside of any function), `this` refers to the global object, which is `window` in a web browser and `global` in Node.js.

```javascript
console.log(this); // Window in a browser
console.log(this); // Global in Node.js
```

## Function Context

Inside a function, the value of `this` depends on how the function is called:

### a. Regular Function

In non-strict mode, `this` inside a regular function refers to the global object, but in strict mode, it defaults to `undefined`.

```javascript
function myFunction() {
  return this;
}
console.log(myFunction() === window); // true in a browser
```

### b. Method

When a function is called as a method of an object, `this` refers to the object itself.

```javascript
const obj = {
  method() {
    return this;
  },
};
console.log(obj.method() === obj); // true
```

### c. Constructor Function

When a function is used as a constructor with the `new` keyword, `this` refers to the newly created object.

```javascript
function MyClass() {
  this.property = "value";
}
const instance = new MyClass();
console.log(instance.property); // 'value'
```

## Event Handlers

In event handler functions, `this` usually refers to the element that triggered the event.

```html
<button onclick="console.log(this)">Click me</button>
```

## Explicit Binding

You can explicitly set the value of `this` using `call()`, `apply()`, or `bind()` methods.

```javascript
function greet() {
  return `Hello, ${this.name}!`;
}

const person = { name: "Alice" };

const greetPerson = greet.bind(person);
console.log(greetPerson()); // Hello, Alice!
```

Here the `this` keyword will now start pointing to the `person` object.

# 12. What is a Constructor Function in JS?

Constructor functions in JavaScript are a way to create objects with a blueprint or template. They are used to instantiate multiple objects with similar properties and methods.

## Definition

You define a constructor function using the `function` keyword. By convention, constructor functions are named with an initial capital letter to distinguish them from regular functions.

## Properties and Methods

Inside the constructor function, you can define properties and methods using the `this` keyword. These properties and methods will be assigned to each instance of the object created using the constructor function.

## Instantiation

To create an instance of an object using a constructor function, you use the `new` keyword followed by the name of the constructor function.

### Example

```javascript
// Constructor function for creating Car objects
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  // Method to display car information
  this.displayInfo = function () {
    return `This is a ${this.year} ${this.make} ${this.model}`;
  };
}

// Creating instances of Car objects
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2018);

// Accessing properties and methods of Car objects
console.log(car1.displayInfo()); // Output: This is a 2020 Toyota Camry
console.log(car2.displayInfo()); // Output: This is a 2018 Honda Civic
```

In this example:

- `Car` is a constructor function that defines the blueprint for creating Car objects.
- `this.make`, `this.model`, and `this.year` are properties of the Car objects.
- `displayInfo()` is a method of the Car objects that returns a string containing information about the car.
- `car1` and `car2` are instances of the Car objects created using the `new` keyword.

Using constructor functions allows for code reusability and organization, as you can easily create multiple instances of objects with similar properties and methods.

# 13. What is Asynchronous Programming in JS and how does it work?

Asynchronous JavaScript refers to the ability of JavaScript to execute multiple tasks concurrently without blocking the execution of other tasks. It allows JavaScript code to perform operations such as fetching data from a server, reading files, or executing time-consuming tasks without halting the entire program's execution.

Asynchronous operations are crucial in web development because they enable better responsiveness and efficiency. Without them, tasks that require waiting for resources, like fetching data from an API or reading files, would cause the entire program to freeze, leading to a poor user experience.

Here's a simple example to illustrate asynchronous JavaScript using the `setTimeout()` function:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000); // Wait for 2 seconds

console.log("End");
```

In this example, "Start" and "End" will be logged immediately, while "Inside setTimeout" will be logged after a 2-second delay. This delay doesn't block the execution of subsequent code, allowing other operations to continue while waiting for the timeout to finish.

Under the hood, asynchronous JavaScript relies on concepts like event loops and callback functions. When an asynchronous operation is initiated, it's scheduled to be executed later, and meanwhile, the JavaScript engine continues to execute other tasks. Once the asynchronous operation completes, a callback function associated with that operation is placed in the event queue. The event loop continuously checks the event queue and executes the callback functions when the execution stack is empty.

Here's an example using a callback function with `setTimeout()`:

```javascript
console.log("Start");

function callback() {
  console.log("Inside setTimeout callback");
}

setTimeout(callback, 2000); // Wait for 2 seconds

console.log("End");
```

In this example, the `callback()` function is executed after the timeout, maintaining the asynchronous behavior.

Asynchronous programming in JavaScript has evolved with the introduction of Promises and async/await syntax, providing cleaner and more structured ways to handle asynchronous operations, but the underlying principles remain the same.

# 14. How Asynchronous Programming in JS works?

Asynchronous programming is a programming paradigm that allows tasks to be executed concurrently, enabling non-blocking behavior in applications. In JavaScript, it's commonly used for tasks such as fetching data from a server, handling user input, or performing I/O operations.

Here's a breakdown of how asynchronous programming works in JavaScript, involving the call stack, event loop, and different queues:

- **Call Stack**: The call stack is a mechanism used by JavaScript to keep track of function calls. When a function is called, it's added to the top of the call stack. When a function finishes executing, it's removed from the stack.
- **Event Loop**: The event loop is a crucial part of asynchronous programming in JavaScript. It continuously checks the call stack and the task queue to determine if there's any work to be done. If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution.
- **Task Queue**: The task queue (also known as the callback queue or message queue) holds tasks that are ready to be executed once the call stack is empty. Tasks in the queue are processed in the order they were added.

Now, let's see how these components work together with some code examples:

```javascript
console.log("Start");

// Asynchronous function with setTimeout
setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 0);

// Synchronous function
console.log("End");
```

When this code runs, here's what happens:

1. "Start" is logged to the console.
2. `setTimeout` is encountered. It schedules a task to be executed asynchronously after a minimum of 0 milliseconds.
3. "End" is logged to the console.
4. Since there's no other synchronous code to execute, the event loop checks the call stack. It's empty, so it moves to the task queue.
5. The task from `setTimeout` is in the task queue. The event loop picks it up and pushes it onto the call stack.
6. "Inside setTimeout callback" is logged to the console.

This demonstrates how asynchronous code (the callback inside `setTimeout`) is executed after the synchronous code (logging "Start" and "End") has finished, thanks to the event loop.

In more complex scenarios involving asynchronous operations like network requests or file I/O, callbacks or promises are typically used to handle the asynchronous results. These callbacks or promises are added to the task queue once the asynchronous operation completes, and they're executed when the call stack is empty.

# 15. What are all the stages of a promise and how to use a promise?

A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states:

- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

Here's how you can use a Promise with code examples:

### Example 1: Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const data = { message: "Promise resolved successfully!" };
    // Resolve the promise with data
    resolve(data);
    // or reject the promise if an error occurs
    // reject(new Error("Promise rejected!"));
  }, 2000);
});
```

### Example 2: Consuming a Promise

```javascript
myPromise
  .then((result) => {
    // Promise fulfilled, handle the result
    console.log("Fulfilled:", result);
  })
  .catch((error) => {
    // Promise rejected, handle the error
    console.error("Rejected:", error);
  })
  .finally(() => {
    // Optional: Perform cleanup or final tasks
    console.log("Promise completed.");
  });
```

In this example:

- **Creating a Promise**:

  - A Promise is created with the `new Promise()` constructor, which takes a function (executor) as an argument.
  - The executor function receives two parameters: `resolve` and `reject`. These are functions provided by JavaScript to change the state of the Promise.
  - Inside the executor function, you perform the asynchronous operation. Once the operation is completed, you call `resolve` with the result if successful, or `reject` with an error if it fails.

- **Consuming a Promise**:

  - You use the `then()` method to handle the fulfillment of the Promise. It takes a callback function as an argument, which is called when the Promise is resolved.
  - You use the `catch()` method to handle the rejection of the Promise. It takes a callback function as an argument, which is called when the Promise is rejected.
  - You can also use the `finally()` method, which takes a callback function as an argument and is called regardless of whether the Promise is fulfilled or rejected. This is often used for cleanup or final tasks.

- **Promise States**:
  - If the asynchronous operation inside the Promise executor succeeds, `resolve` is called, transitioning the Promise to the fulfilled state.
  - If the operation fails, `reject` is called, transitioning the Promise to the rejected state.
  - While the Promise is in the pending state, it may transition to either fulfilled or rejected, depending on the outcome of the asynchronous operation.

Promises provide a more structured way to handle asynchronous operations compared to callbacks, making code easier to read and maintain, especially when dealing with multiple asynchronous tasks.

# 16. What is async/await and how does it work?

Asynchronous programming in JavaScript traditionally relied heavily on callbacks, which could lead to callback hell and hard-to-read code. To mitigate this issue, JavaScript introduced the async/await syntax as part of ES2017 (ES8). async/await makes asynchronous code look and behave more like synchronous code, which can greatly improve readability and maintainability.

Here's how async/await works:

- **Async Function Declaration (`async`)**:

  - You declare a function as `async` by prefixing it with the `async` keyword. This tells JavaScript that the function will operate asynchronously and may contain `await` expressions inside it.

  ```javascript
  async function fetchData() {
    // Asynchronous operations
  }
  ```

- **Await Expression (`await`)**:

  - Inside an `async` function, you can use the `await` keyword before an expression that returns a Promise. The `await` keyword pauses the execution of the `async` function until the promise is resolved, and then it resumes the execution with the resolved value.

  ```javascript
  async function fetchData() {
    const result = await someAsyncOperation();
    // code here executes after someAsyncOperation() resolves
  }
  ```

- **Promises**:

  - If the expression after `await` is not a Promise, JavaScript automatically wraps it into a resolved Promise. This simplifies error handling, as any errors thrown in the awaited expression will be caught and propagated as rejected Promises.

- **Event Loop Integration**:
  - When an `async` function is called, it returns a Promise immediately, even if the asynchronous operations inside it haven't completed yet.
  - When encountering an `await` expression, the JavaScript engine pauses execution of the `async` function and continues executing the rest of the program until the awaited promise settles (either resolves or rejects).
  - Once the awaited Promise settles, the event loop places the function back into the call stack, allowing it to resume execution with the resolved value (or propagate the rejection).

This asynchronous behavior enables non-blocking execution, allowing other code to run while waiting for I/O operations to complete, which improves performance and responsiveness.

By utilizing async/await, you can write asynchronous code in a more readable and maintainable manner, avoiding the callback pyramid of doom and making error handling more straightforward.
