//arithmetic operations
//link to mdn math modules:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
const num1: number = 10;
const num2: number = 5;

console.log(`Sum: ${num1 + num2}`); // Output: Sum: 15
console.log(`Difference: ${num1 - num2}`); // Output: Difference: 5

console.log(`Product: ${num1 * num2}`); // Output: Product: 50

console.log(`Quotient: ${num1 / num2}`); // Output: Quotient: 2

console.log(`Remainder: ${num1 % num2}`); // Output: Remainder: 0

//exponentiation

console.log(`Exponentiation: ${num1 ** num2}`); // Output: Exponentiation: 1000

//increment and decrement

let counter: number = 0;

counter++; // counter = 1
console.log(counter);

counter--; // counter = 0

// ... previous code remains the same ...
//string concatenation

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30,
};

console.log(`Hello, my name is ${user.name} and I'm ${user.age} years old.`); // Output: Hello, my name is John and I'm 30 years old.

//remainder

console.log(10 % 3); // Output: 1

//negate

console.log(-10); // Output: -10

const nan: number = 0 / 0;

console.log(isNaN(nan)); // Output: true
