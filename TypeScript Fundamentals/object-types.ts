import assert from 'assert';

type Vehicle = {
  brand: string;
  model: string;
  year: number;
};
//create a type alias for a Vehicle

const grandTruck = { brand: 'Ford', model: 'F-150', year: 2021 } as Vehicle;

const familySuv = { brand: 'Toyota', model: 'Camry', year: 2018 } as Vehicle;

assert.equal(grandTruck.brand, 'Ford'); // true

assert.equal(grandTruck.model, 'F-150'); // true

assert.equal(grandTruck.year, 2021); // true

assert.equal(familySuv.brand, 'Toyota'); // true

//adding a new property to the Vehicle type. Takes in the properties from vehicle and unites it with the new property

type VehicleWithSpecifics = Vehicle & {
  color: string;
  mileage: number;
};

const myCar = {
  brand: 'Ford',
  model: 'Mustang',
  year: 2010,
  color: 'Red',
  mileage: 100000,
} as VehicleWithSpecifics;
