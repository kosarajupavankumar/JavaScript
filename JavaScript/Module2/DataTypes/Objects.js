// Objects are  basically in which data is sttored in the form of key-value pair

let person1 = {
  name: "pavankumar",
  age: 31,
  phone: 12345679419,
};

var x = 5;
var y = x;
x++;

console.log(x);
console.log(y);

console.log(person1.name);
console.log(person1.age);
console.log(person1.phone);
console.log(person1.isMarried);

let person2 = person1;

person1.age++;

console.log(person2 === person1);

console.log(person1.age);
console.log(person2.age);

let captainAmerica = {
  name: "steve Rogers",
  age: 102,
  //Array
  allies: ["Tony", "Bruce", "bucky"],

  // function inside the Object
  sayHi: function () {
    console.log(`Captian says Hi`);
  },

  //nested object
  address: {
    country: "USA",
    city: {
      name: "Brankley",
      pincode: 12345,
    },
  },

  //Boolean
  isAvenger: true,
};

console.log(captainAmerica.age);
console.log(captainAmerica.allies[1]);
console.log(captainAmerica.address.city.name);
console.log(captainAmerica.sayHi());

captainAmerica.isAvenger = false;
console.log(captainAmerica.isAvenger);

captainAmerica.movies = ["End Game", "Avenagers"];

delete captainAmerica.allies;
console.log(captainAmerica);

let husband = {
  name: "steve Rogers",
  age: 102,
  //Array
  allies: ["Tony", "Bruce", "bucky"],

  // function inside the Object
  sayHi: function () {
    console.log(`Captian says Hi`);
  },

  //nested object
  address: {
    country: "USA",
    city: {
      name: "Brankley",
      pincode: 12345,
    },
  },

  //Boolean
  isAvenger: true,
};

let wife = husband;

wife.address.country = "India";
wife.address.city.name = "Guntur";

console.log(husband.address.city.name);
