let a = 5;
let b = a;
b++;

console.log(a); // 5
console.log(b); // 6

let husband = {
  firstName: "pavan",
  lastName: "kumar",
  address: {
    city: "Hyderabad",
    country: "India",
  },
};

let wife = {
  firstName: "ray",
  lastName: "watson",
};

wife.address = husband.address;

// after 5 years : they seperated

wife.address.city = "North Street";
wife.address.country = "US";

console.log(husband.address);
console.log(wife.address);

console.log(husband.address === wife.address); // true

// Shallow copy using the spread operator give an example

let husband1 = {
  firstName: "pavan",
  lastName: "kumar",
  address: {
    city: "Hyderabad",
    country: "India",
  },
};

let wife1 = {
  firstName: "ray",
  lastName: "watson",
};

wife1.address = { ...husband1.address };

// after 5 years : they seperated
console.log(husband1 === wife1); // false
console.log(husband1.address === wife1.address); // false

// Deep Copy using JSON.parse and JSON.stringify

let husband2 = {
  firstName: "pavan",
  lastName: "kumar",
  address: {
    city: "Hyderabad",
    country: "India",
  },
};

let wife2 = {
  firstName: "ray",
  lastName: "watson",
};

wife2.address = JSON.parse(JSON.stringify(husband2.address));

// after 5 years : they seperated
wife2.address.city = "North Street";
wife2.address.country = "US";

console.log(husband2.address === wife2.address); // false

