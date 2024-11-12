import { generateInvoice } from './billing';
import { calculateShippingCost } from './shipping';
import { checkInventory } from './inventory';
const simpleCart: { weight: number; destination: string } = {
  weight: 2,
  destination: 'New York',
};

console.log(calculateShippingCost(simpleCart)); // $10
console.log(generateInvoice(12345)); // Invoice generated for order ID: 12345

console.log(
  checkInventory({
    name: 'Product A',
    price: 10,
    qty: 12,
  })
);
