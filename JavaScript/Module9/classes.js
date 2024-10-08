// class MyClass {
//   constructor() {
//     this.name = "MyClass";
//   }

//   sayHi() {
//     console.log(`Hi, my name is ${this.name}`);
//   }

//   static sayHello() {
//     console.log("Hello from MyClass");
//   }
// }

class Person {
  constructor(name, age, location, occupation) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.occupation = occupation;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }

  static sayHello() {
    console.log("Hello from Person");
  }

  describe() {
    console.log(
      `I am ${this.name}, ${this.age} years old, living in ${this.location}, and working as a ${this.occupation}`
    );
  }
}

const person1 = new Person("John", 30, "New York", "Software Engineer");
person1.sayHi();
person1.describe();

const person2 = new Person("Jane", 25, "California", "Doctor");
person2.sayHi();
person2.describe();
