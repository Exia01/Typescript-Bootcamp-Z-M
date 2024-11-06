// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from 'assert';
import { faker } from '@faker-js/faker';

const generateFirstName = (): string => {
  return faker.person.firstName();
};
const generateLastName = (): string => {
  return faker.person.lastName();
};
const generateFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};
const printOutFullName = (firstName: string, lastName: string): string => {
  const fullName = generateFullName(firstName, lastName);
  return fullName;
};

console.log(printOutFullName(generateFirstName(), generateLastName()));
