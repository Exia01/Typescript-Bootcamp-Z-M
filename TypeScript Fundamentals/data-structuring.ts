//This creates a "contract" for an "Employee" object with properties specified in the "Employee" interface
interface Employee {
  id: number;
  name: string;
  addressOnFile: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  department: string;
  isFullTime: boolean;
  salary: number;
  warehouseLocation: string;
  lastInventoryDate: Date;
  getSalary(): number;
  getDepartment(): string;
}
//implementation of the "Employee" interface
// This creates a "contract" for an "Employee" object with properties specified in the "Employee" interface
interface Employee {
  id: number;
  name: string;
  addressOnFile: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  department: string;
  isFullTime: boolean;
  salary: number;
  warehouseLocation: string;
  lastInventoryDate: Date;
  getSalary(): number;
  getDepartment(): string;
}

// Implementation of the "Employee" interface in a class
class EmployeeClass implements Employee {
  id: number;
  name: string;
  addressOnFile: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  department: string;
  isFullTime: boolean;
  salary: number;
  warehouseLocation: string;
  lastInventoryDate: Date;

  constructor(
    id: number,
    name: string,
    addressOnFile: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    },
    department: string,
    isFullTime: boolean,
    salary: number,
    warehouseLocation: string,
    lastInventoryDate: Date
  ) {
    this.id = id;
    this.name = name;
    this.addressOnFile = addressOnFile;
    this.department = department;
    this.isFullTime = isFullTime;
    this.salary = salary;
    this.warehouseLocation = warehouseLocation;
    this.lastInventoryDate = lastInventoryDate;
  }

  getSalary(): number {
    return this.salary;
  }

  getDepartment(): string {
    return this.department;
  }
}

// Example of creating an instance of EmployeeClass
const employee = new EmployeeClass(
  1,
  'John Doe',
  { street: '123 Main St', city: 'Anytown', state: 'CA', zipCode: '12345' },
  'Sales',
  true,
  50000,
  'Warehouse A',
  new Date()
);
console.log(
  `Employee ID: ${employee.id}, Name: ${
    employee.name
  }, Department: ${employee.getDepartment()}, Salary: ${employee
    .getSalary()
    .toString().startsWith('$')}`
); // Output: Employee ID: 1, Name: John Doe, Department: Sales, Salary: 50000
