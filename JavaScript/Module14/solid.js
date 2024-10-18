// Explain the SOLID principles and give an example of each.

// Answer:
// The SOLID principles are a set of five principles that help software developers design maintainable and scalable software. These principles are:

// 1. Single Responsibility Principle (SRP): A class should have only one reason to change, meaning that a class should only have one job or responsibility. This principle helps in keeping the codebase clean, maintainable, and easier to understand.

// Example:
const calculateArea = (length, width) => {
  return length * width;
};

const calculatePerimeter = (length, width) => {
  return 2 * (length + width);
};

// In the above example, we have two separate functions for calculating the area and perimeter of a rectangle. Each function has a single responsibility, making the code easier to understand and maintain.

// 2. Open/Closed Principle (OCP): Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This principle encourages developers to design software components in a way that allows them to be easily extended without modifying the existing code.

// Example:
class Shape {
  calculateArea() {
    throw new Error("Method not implemented");
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// In the above example, the Shape class is closed for modification, but open for extension. We can easily add new shapes (e.g., Circle) by extending the Shape class without modifying the existing code.

// 3. Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. This principle ensures that derived classes can be substituted for their base classes without causing errors or unexpected behavior.

// Example:
class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostrich cannot fly");
  }
}

// In the above example, the Ostrich class is a subclass of Bird, but it overrides the fly method to throw an error because ostriches cannot fly. This ensures that the Ostrich class can be substituted for the Bird class without affecting the correctness of the program.

// 4. Interface Segregation Principle (ISP): A client should not be forced to implement interfaces they do not use. This principle encourages developers to design small, specific interfaces that are tailored to the needs of the clients, rather than large, general-purpose interfaces.

// Example:
// example of a bad design violating ISP write the code as well complete the code

// Bad design violating ISP
class Machine {
  print() {
    throw new Error("Method not implemented");
  }

  scan() {
    throw new Error("Method not implemented");
  }

  fax() {
    throw new Error("Method not implemented");
  }
}

class MultiFunctionPrinter extends Machine {
  print() {
    console.log("Printing...");
  }

  scan() {
    console.log("Scanning...");
  }

  fax() {
    console.log("Faxing...");
  }
}

class OldFashionedPrinter extends Machine {
  print() {
    console.log("Printing...");
  }

  scan() {
    throw new Error("OldFashionedPrinter cannot scan");
  }

  fax() {
    throw new Error("OldFashionedPrinter cannot fax");
  }
}

// In the above example, the Machine class has multiple methods (print, scan, fax), but not all subclasses need to implement all these methods. This violates the ISP because clients may be forced to implement methods they do not use.

// Good design following ISP
class Printer {
  print() {
    throw new Error("Method not implemented");
  }
}

class Scanner {
  scan() {
    throw new Error("Method not implemented");
  }
}

class Fax {
  fax() {
    throw new Error("Method not implemented");
  }
}


class MultiFunctionDevice extends Printer, Scanner, Fax {
  print() {
    console.log("Printing...");
  }

  scan() {
    console.log("Scanning...");
  }

  fax() {
    console.log("Faxing...");
  }
}

class OldFashionedPrinter extends Printer {
  print() {
    console.log("Printing...");
  }
}

// In the above example, we have separate interfaces for Printer, Scanner, and Fax, and classes can implement only the interfaces they need. This design follows the ISP by allowing clients to implement only the methods they use.


// 5. Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions. This principle promotes loose coupling between modules by using interfaces or abstract classes to define dependencies.

// Example:

// Bad design violating DIP
class LightBulb {
  turnOn() {
    console.log("LightBulb turned on");
  }

  turnOff() {
    console.log("LightBulb turned off");
  }
}

class Switch {
  constructor(bulb) {
    this.bulb = bulb;
  }

  flip() {
    if (this.bulb.isOn) {
      this.bulb.turnOff();
    } else {
      this.bulb.turnOn();
    }
  }
}

const bulb = new LightBulb();
const switch1 = new Switch(bulb);
switch1.flip();

// In the above example, the Switch class directly depends on the LightBulb class, violating the DIP. If we want to switch to a different type of bulb (e.g., LED bulb), we would need to modify the Switch class.

// Good design following DIP
class Switch {
  flip() {
    throw new Error("Method not implemented");
  }
}

class LightBulb {
  turnOn() {
    console.log("LightBulb turned on");
  }

  turnOff() {
    console.log("LightBulb turned off");
  }
}

class SwitchableDevice {
  constructor(device) {
    this.device = device;
  }

  flip() {
    if (this.device.isOn) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
  }
}

const bulb1 = new LightBulb();
const switch2 = new SwitchableDevice(bulb1);
switch2.flip();

// In the above example, the SwitchableDevice class acts as an abstraction that allows the Switch class to depend on a generic SwitchableDevice interface, rather than a specific LightBulb class. This design follows the DIP by decoupling the high-level Switch class from the low-level LightBulb class.

// By following the SOLID principles, developers can create more maintainable, scalable, and flexible software systems that are easier to understand, extend, and modify.

