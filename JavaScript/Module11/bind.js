const parent = {
  health: 100,
  addHealth: function (num1, num2) {
    this.health += num1 + num2;
  },
};

const child = {
  health: 100,
};

parent.addHealth.call(child, 10, 20); // 130
parent.addHealth.apply(child, [10, 20]); // 130
const answer = parent.addHealth.bind(child, 10, 20); // 130
answer();
console.log(child.health); // 130
