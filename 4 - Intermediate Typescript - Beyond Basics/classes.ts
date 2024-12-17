//Example of classes and the ability to extend them and instantiate them
import assert from 'assert';

class Vehicle {
  protected _make: string; // Changed to protected to allow inheritance access
  protected _model: string; // Changed to protected to allow inheritance access
  public vehicleType: string;
  public year: number;
  static totalVehicles: number = 0;
  recalled: boolean = false;

  constructor(make: string, model: string, year: number, vehicleType: string) {
    this._make = make;
    this._model = model;
    this.year = year;
    this.vehicleType = vehicleType;
    Vehicle.totalVehicles++;
  }

  public get make(): string {
    return this._make;
  }

  public get model(): string {
    return this._model;
  }

  public startEngine(): void {
    console.log(`${this._make} ${this._model} engine started.`);
  }
}

class Car extends Vehicle {
  private _numberOfDoors: number;
  private _isFourWheelDrive: boolean;
  //other car properties and methods
  constructor(
    make: string,
    model: string,
    year: number,
    vehicleType: string,
    numberOfDoors: number,
    isFourWheelDrive: boolean
  ) {
    super(make, model, year, vehicleType);
    this._numberOfDoors = numberOfDoors;
    this._isFourWheelDrive = isFourWheelDrive;
    Car.totalVehicles++;
  }
  get numberOfDoors(): number {
    return this._numberOfDoors;
  }
}

class Truck extends Vehicle {
  private _numberOfAxles: number;
  private _cargoCapacity: number;
  //other truck properties and methods
  constructor(
    make: string,
    model: string,
    year: number,
    vehicleType: string,
    numberOfAxles: number,
    cargoCapacity: number
  ) {
    super(make, model, year, vehicleType);
    this._numberOfAxles = numberOfAxles;
    this._cargoCapacity = cargoCapacity;
    Truck.totalVehicles++;
  }
  get numberOfAxles(): number {
    return this._numberOfAxles;
  }
}
//instantiating the classes
const car = new Car('Toyota', 'Camry', 2021, 'car', 4, false);
const truck = new Truck('Ford', 'F150', 2021, 'truck', 2, 1000);
console.log(car);
console.log(truck);
console.log('Total vehicles:', Vehicle.totalVehicles);
console.log('Total cars:', Car.totalVehicles);
console.log('Total trucks:', Truck.totalVehicles);
//Assert the class
assert(car instanceof Car);
assert(truck instanceof Truck);

//checking the methods are working
assert(car.make === 'Toyota');
assert(car.model === 'Camry');
assert(truck.model === 'F150');


//
truck.startEngine();