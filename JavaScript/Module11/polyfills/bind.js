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

const answer = person.getFullName.bind(animal);
console.log(answer()); // Lion King

// Polyfill for bind method

// Add a custom method 'myBind' to the Function prototype

Function.prototype.myBind = function (context, ...args) {
  // Store the function (this) in a variable
  const fn = this;

  // Return a new function that, when called, will call the original function with the provided context and arguments
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

const answer1 = person.getFullName.myBind(animal);
console.log(answer1()); // Lion King
