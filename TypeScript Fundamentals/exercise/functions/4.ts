// You are developing a application to determine whether a user is eligible for
// a discount.
//
// Requirements:
//
// - Create two functions to check for discount eligibility:
//   1. `isSenior`: returns `true` when the input `age` is 65 or older
//   2. `isLargePurchase`: returns `true` when the input `amount` is over 99
// - Define a function named `isEligibleForDiscount` and then use both the
//   `isSenior` and `isLargePurchase` functions that you created to determine
//   if there is discount eligibility.
//   - Use boolean logic and compound boolean operators to return `true` or
//   `false` from this function.
// - Print out whether a user is eligible for a discount.

import { strict as assert } from 'assert';

const seniorAge: number = 65;

const isSenior = (age: number, establishedAge:number = seniorAge): boolean => {
  return age >= establishedAge;
};
const isLargePurchase = (
  purchaseTotal: number,
  purchaseThreshold: number = 99
): boolean => {
  return purchaseTotal >= purchaseThreshold;
};

const isEligibleForDiscount = (age: number, purchaseTotal: number): boolean => {
  return isSenior(age) || isLargePurchase(purchaseTotal);
};

//
// Test cases
assert.equal(isEligibleForDiscount(60, 90), false);
assert.equal(isEligibleForDiscount(70, 90), true);
assert.equal(isEligibleForDiscount(60, 100), true);
