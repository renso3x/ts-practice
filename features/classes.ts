// Classess and Inheritance:
// Access modifiers:
// protected is accessable only as a variable inside a class
// public
// private
class Vehicle {
  // 2 Ways to create a constructor

  /**
   * 1.
   * color: string = 'red'
   *
   * constructor(color: string) {
   *  this.color = color
   * }
   */

  // 2. public inside a constructor will assign to
  // an instance to color
  constructor(public color: string) {}

  protected honk(): void {
    console.log('honk honk');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// Inheritance
class Car extends Vehicle {
  // public modifier in constructor will create
  //  and instance of inside the class
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Driving');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');

car.startDrivingProcess();
