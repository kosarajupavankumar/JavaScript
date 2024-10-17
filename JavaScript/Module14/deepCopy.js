// create the a deep copy function and dont use the inbuild function

function clone(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => clone(item));
  } else if (obj !== null && typeof obj === "object") {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = clone(obj[key]);
      }
    }
    return newObj;
  } else {
    return obj;
  }
}

let husband = {
  firstName: "pavan",
  lastName: "kumar",
  address: {
    city: "Hyderabad",
    country: "India",
  },
  friends: ["Ravi", "Sai", "Kiran"],
};

let wife = clone(husband);

wife.address.city = "North Street";
wife.address.country = "US";

console.log(husband);
console.log(wife);
