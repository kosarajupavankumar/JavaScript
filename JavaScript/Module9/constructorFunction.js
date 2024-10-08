//Every Pizza : toppings, size, crust, price types

const pizza1 = {
  toppings: ["cheese", "pepperoni", "mushrooms"],
  size: "Medium",
  crust: "Thin",
  price: 12.99,
};

const pizza2 = {
  toppings: ["cheese", "pepperoni", "mushrooms", "olives"],
  size: "Large",
  crust: "Thick",
  price: 15.99,
};

function Pizza(toppings, size, crust, price) {
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.price = price;
  this.describe = () => {
    console.log(
      `This pizza has ${this.toppings.join(", ")} as toppings, size is ${
        this.size
      }, crust is ${this.crust}, and price is $${this.price}`
    );
  };
}

const pizza3 = new Pizza(
  ["cheese", "pepperoni", "mushrooms"],
  "Medium",
  "Thin",
  12.99
);
pizza3.describe();
console.log(pizza3);

const person1 = {
  name: "John",
  age: 30,
  location: "New York",
  occupation: "Software Engineer",
};

const person2 = {
  name: "Jane",
  age: 25,
  location: "California",
  occupation: "Doctor",
};

function Person(name, age, location, occupation) {
  console.log(this);
  this.name = name;
  this.age = age;
  this.location = location;
  this.occupation = occupation;
  this.sayHi = () => {
    console.log(`Hi, my name is ${this.name}`);
  };

  //   return this;
}

const person4 = new Person("John", 30, "New York", "Software Engineer");
person4.sayHi();
console.log(person4);

const person5 = new Person("Jane", 25, "California", "Doctor");
person5.sayHi();

console.log(person5);


// 