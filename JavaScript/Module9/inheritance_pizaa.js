class Pizza {
  constructor(toppings, size, crust, price) {
    this.toppings = toppings;
    this.size = size;
    this.crust = crust;
    this.price = price;
  }
  describe() {
    console.log(
      `This pizza has ${this.toppings.join(", ")} as toppings, size is ${
        this.size
      }, crust is ${this.crust}, and price is $${this.price}`
    );
  }

  static getDollarPrice() {
    return `$${this.price}`;
  }
}

class StuffPizza extends Pizza {
  static totalPizzaMade = 0;
  constructor(toppings, size, crust, price, stuffings) {
    super(toppings, size, crust, price);
    this.stuffings = stuffings;
    StuffPizza.totalPizzaMade++;
  }

  static getStuffPizzaCount() {
    console.log(
      `Total number of stuff pizza made: ${StuffPizza.totalPizzaMade}`
    );
  }

  describe() {
    super.describe();
    console.log(`This pizza has ${this.stuffings.join(", ")} as stuffings`);
  }
}

const stuffpizza = new StuffPizza(
  ["cheese", "pepperoni", "mushrooms"],
  "Medium",
  "Thin",
  12.99,
  ["onions", "bell peppers", "sausage"]
);

// console.log(stuffpizza);

stuffpizza.describe();
StuffPizza.getStuffPizzaCount();
