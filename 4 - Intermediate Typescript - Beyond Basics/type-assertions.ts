//Example of type assertions and best practices in TypeScript

let myStringExample: any = 'Hello, World!';
let myStringLength: number = (myString as string).length; // Type assertion

console.log(myStringLength); // Output: 13

//Best practices: Don't use type assertions in favor of safer alternatives

// Type Guard: Check if a value is of a specific type

function isString(value: any): value is string {
  return typeof value === 'string';
}

if (isString(myStringExample)) {
  let myStringLength2: number = myStringExample.length; // TypeScript knows myStringExample is a string here
}

// Nullish Coalescing Operator: Use it to safely unwrap nullable values

let myNullableString: string | null | undefined = 'Hello, World!';
let myNonNullableString: string = myNullableString ?? 'Default Value'; // TypeScript knows myNullableString is non-null here

//type
type EmployeeType = {
  position(): string;
};
class ImplementedManagerClass implements EmployeeType {
  position(): string {
    return 'Manager';
  }
  //... other methods
  checkLaborPerHr(): void {
    //... implementation
  }
}
//when hovering over alice, TypeScript shows type EmployeeType. This is because the class implements the EmployeeType interface and we look at alice as an instance of the implementedManagerClass.
const alice:EmployeeType = new ImplementedManagerClass();
//sometimes classes implement multiple interfaces. In that case, TypeScript will show the union of all the interfaces in the hover tooltip.
