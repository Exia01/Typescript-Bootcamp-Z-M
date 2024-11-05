let n:number = 10;
n = n + 1;

console.log(n); // Output: 11

let m:number = 5;
m = m * 2 - n;

console.log(m); // Output: 10


//postfix increment and decrement

let counterSample: number = 0;

console.log(counterSample); // Output: 0

counterSample++;

console.log(counterSample); // Output: 1

counterSample--;

console.log(counterSample); // Output: 0

counterSample++;

//prefix increment and decrement

console.log(counterSample); // Output: 1

++counterSample;

console.log(counterSample); // Output: 2
