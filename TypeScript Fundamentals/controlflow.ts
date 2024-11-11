import { assert } from 'console';

const isFiscalYearResetMarker = (month: string): boolean => {
  const fiscalMonths = ['January', 'February', 'November', 'December'];
  if (fiscalMonths.includes(month)) {
    return true;
  } else if (month === 'January' || month === 'December') {
    return true;
  }
  return false;
};

//using switch statement
const evaluateIfFruitVegetableOrLegume = (fruit: string): string => {
  switch (fruit.toLowerCase()) {
    case 'apple':
    case 'banana':
    case 'orange':
      return 'fruit';
    case 'broccoli':
    case 'carrot':
    case 'cauliflower':
      return 'vegetable';
    case 'pepper':
    case 'onion':
    case 'garlic':
      return 'legume';
    default:
      return 'unknown';
  }
};
console.assert(evaluateIfFruitVegetableOrLegume('apple') === 'fruit');

//using ternary operator
const isChickenTempReadyInFarenheit = (temp: number): boolean => {
  return temp >= 165 ? true : false;
};

//using if-else statement
const checkIfEmployeeOvertimeEligible = (
  hoursWorked: number,
  department: string,
  otHoursWorked: number,
  isHolidaySeason: boolean
): boolean => {
  if (department === 'engineering' && hoursWorked > 40) {
    return true;
  } else if (department === 'finance' && hoursWorked > 45) {
    return true;
  } else if (department === 'sales' && hoursWorked > 35 && !isHolidaySeason) {
    return true;
  } else if (
    department === 'marketing' &&
    hoursWorked > 40 &&
    otHoursWorked > 5
  ) {
    return true;
  }
  return false;
};

assert(checkIfEmployeeOvertimeEligible(45, 'engineering', 0, false) === true);

//fallthrough case

const checkIfNumberIsEvenOrOdd = (number: number): string => {
  switch (true) {
    case number % 2 === 0:
      return 'even';
    case number % 2 !== 0:
      return 'odd';
    default:
      return 'unknown';
  }
};

//another ternary operator example
const isBottlePlasticOrGlass = (bottleType: string): string => {
  return bottleType === 'glass' ? 'glass' : 'plastic';
};