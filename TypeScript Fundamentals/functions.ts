//Various examples of witting and calling functions in TypeScript

// Example 1: Function with parameters and return type

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // Output: 15

const dictionary: Array<string> = ['apple', 'banana', 'cherry'];
function isWordInDictionary(word: string, dictionary: string[]): boolean {
  return dictionary.indexOf(word) !== -1;
}

console.log(isWordInDictionary('banana', dictionary)); // Output: true
// Example 2: Function with optional parameters

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet('John Doe')); // Output: Hello, John Doe!


//passing functions as arguments

function multiply(a: number, b: number, callback: (result: number) => void): void {
  const result = a * b;
  callback(result);
  return;
}

multiply(5, 10, (result) => {
  console.log(`The product is: ${result}`); // Output: The product is: 50
});
