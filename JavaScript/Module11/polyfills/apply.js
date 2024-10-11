const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const animal = {
  firstName: "Lion",
  lastName: "King",
  age: 5,
};

const answer = person.getFullName.apply(animal, []); // "Mercedes undefined"
console.log(answer);

// PolyFill for apply method

// Add a custom method 'myApply' to the Function prototype
Function.prototype.myApply = function (context, args) {
  // If no context is provided, default to the global object (window in browsers)
  context = context || window;

  // Assign the function (this) to a property 'fn' of the context object
  context.fn = this;

  // Call the function with the provided arguments and store the result
  const result = context.fn(...args);

  // Remove the temporary 'fn' property from the context object
  delete context.fn;

  // Return the result of the function call
  return result;
};

const answer1 = person.getFullName.myApply(animal, []); // "Mercedes undefined"
console.log(answer1);
