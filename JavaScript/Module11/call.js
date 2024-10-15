const parent = {
  health: 100,
  addHealth: function (num1, num2) {
    this.health += num1 + num2;
  },
};

console.log(parent.health); // 100

parent.addHealth(10, 20);

console.log(parent.health); // 130

const child = {
  health: 100,
};

parent.addHealth.call(child, 10, 20);

const person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

console.log(person.getFullName()); // John Doe

const person1 = {
  firstname: "pavan",
  lastname: "kumar",
};

const answer = person.getFullName.call(person1);

console.log(answer);


