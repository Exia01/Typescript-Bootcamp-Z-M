// Primitive Types
let myBoolean: boolean = true;
let myNumber: number = 10;
let myString: string = 'Hello, TypeScript!';
let myNull: null = null;
let myUndefined: undefined = undefined;

// Type Inference
let myInferenceNumber = 10; // TypeScript infers the type as number

// Type Annotations
let myExplicitNumber: number = 10;

// Union Types
let myUnion: number | string = 10;
myUnion = 'hello';

// Type Aliases
type MyUnionType = number | string;
let myAliasedUnion: MyUnionType = 'world';

// Interfaces
interface Person {
  name: string;
  age: number;
}

let myPerson: Person = {
  name: 'John Doe',
  age: 30,
};

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let myIdentityNumber = identity<number>(10);
let myIdentityString = identity<string>('Hello');

// Type Assertions
let myAny: any = 10;
let myAssertedNumber = myAny as number;
let myAnotherAssertedNumber = <number>myAny;
