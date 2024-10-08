// create the interface for the cvechile and car
// create the class for the vehicle and car

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  Information() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }

  start() {
    console.log("Vehicle is starting");
  }

  stop() {
    console.log("Vehicle is stopping");
  }
}

const vechile = new Vehicle("Toyota", "Corolla", 2021);
vechile.Information();

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  Information() {
    super.Information();
    console.log(`Doors: ${this.doors}`);
  }
}

const car = new Car("Toyota", "Corolla", 2021, 4);
car.Information();
car.start();
car.stop();
