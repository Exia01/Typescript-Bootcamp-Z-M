//example and explanation of type aliases
type EmployeeId = number;
type fruit = string;



// example and explanation of union types
let selectedFruit: fruit | string;

selectedFruit = 'apple'; // valid

// selectedFruit = 123; // invalid

//essentially type aliases provides another name for something that already exists

let employeeId: EmployeeId; 
//above basically means that anywhere we use EmployeeId, we can use number as an annotation or EmployeeId
let employeeIdentification:EmployeeId;
employeeId = 12345; // valid