//various examples of array and methods in TypeScript`

// Example 1: Create an array of numbers and use methods to manipulate it
const oneToTen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the spread operator to create a new array with all elements from oneToTen

const copiedOneToTenArray: number[] = [...oneToTen];

//array with various data types

// we want to avoid this and use elements in commnons
const mixedStringAndNumberArray: (number | string | Function)[] = [1, 2, "three", 4, "five", 6, () => console.log("Hello")];

// Example 2: Use the filter method to create a new array with only odd numbers from oneToTen

const oddNumbersArray: number[] = oneToTen.filter((num) => num % 2 !== 0);