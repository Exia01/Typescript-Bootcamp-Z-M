interface ShippingCartInterface {
    weight: number;
    destination: string;
};

export function calculateShippingCost(cartItem: ShippingCartInterface): number {
    // Example logic for calculating shipping cost
    const costPerKg = 5;
    const costPerLb = 10;
    return cartItem.weight * costPerKg;
}