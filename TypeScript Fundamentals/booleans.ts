// Example usage of booleans

const isTrue: boolean = true;
const isFalse: boolean = false;

// booleans are either `true` or `false`
const yup = true;
const nope = false;

// greater than / less than
let age: number = 18;
const canPurchase: boolean = age >= 18; // true

const denyPurchase = age < 18; // false

// equal to
const two: number = 2;
const isThree: boolean = 1 + two === 3;

//function to check if a number is even
function isEven(number: number): boolean {
  return number % 2 === 0;
}

//compound boolean expressions

const isAdult: boolean = age >= 18 && canPurchase; // true
const isNotAdult: boolean = age < 18 || denyPurchase; // false

// Using logical OR and AND operators

const isAdultOrNotAdult: boolean = isAdult || isNotAdult; // true

const isAdultAndNotAdult: boolean = isAdult && isNotAdult; // false

// Using NOT operator

const isNotAdultAndNotAdult: boolean = !(isAdult && isNotAdult); // true

console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isAdultAndNotAdult); // false)

const writing: boolean = true;
const reading: boolean = !writing;

console.log(`reading ${reading ? 'is' : 'is not'}`); // true

//create a custom assert function
function assertIsBoolean(value: any, compareValue: boolean): void {
  if (typeof value !== 'boolean' || value !== compareValue) {
    throw new Error(`Expected ${value} to be ${compareValue}`);
  }
  console.log(`Assertion passed: ${value} === ${compareValue}`);
}
