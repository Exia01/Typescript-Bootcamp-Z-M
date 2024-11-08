//examples of annotations
const nameExample: string = 'John Doe';

// Type Annotations

let myName: string;
myName = 'John Doe';

// Union Types

let myAge: number | string;
myAge = 30;
myAge = '30';

// Type Aliases

type MyString2 = string;
let myString2: string;
myString2 = 'Hello, World!';

// Function Annotations
function returnTodaysDate(): string {
  return new Date().toISOString().split('T')[0]
}
console.log(returnTodaysDate());
// Function with Optional Parameters
