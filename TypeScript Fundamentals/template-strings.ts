//Example of template string with interpolation

const userName: string = 'John Doe';
const userAge: number = 30;

const greeting = `Hello, my name is ${userName}. I am ${userAge} years old.`;

console.log(greeting); // Output: Hello, my name is John Doe. I am 30 years old.

//expressions inside template strings are evaluated

const sumTwoNumber: number = 10 + 20;
const result:string = `The sum of 10 and 20 is ${sumTwoNumber}.`;

console.log(result); // Output: The sum of 10 and 20 is 30.

//composing multiple strings

const firstName: string = 'John';
const lastName: string = 'Doe';

const fullName: string = firstName + ' ' + lastName;
const fullNameWithTemplate: string = `${firstName} ${lastName}`;