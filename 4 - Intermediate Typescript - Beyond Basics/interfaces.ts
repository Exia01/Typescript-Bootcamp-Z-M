// Basic Interface Definition
interface Person {
    name: string;
    age: number;
}

// Implementing an interface
const employee: Person = {
    name: "John",
    age: 30
}

// Interface with optional properties (?)
interface Car {
    brand: string;
    model: string;
    year?: number;  // Optional property
}

const myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
    // year is optional, so we can omit it
}

// Interface with readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is readonly

// Interface with methods
interface Animal {
    name: string;
    makeSound(): void;
    eat(food: string): boolean;
}

// Class implementing an interface
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Woof!");
    }

    eat(food: string): boolean {
        return food === "dog food";
    }
}

// Interface extending another interface
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

const mySquare: Square = {
    color: "blue",
    sideLength: 10
}

// Interface for function types
interface MathOperation {
    (x: number, y: number): number;
}
