interface OrderSampleInterface{
    orderId: number;
    customerName: string;
    orderDate: Date;
}

export function generateInvoice(orderId: number): string {
    // Example logic for generating an invoice
    return `Invoice generated for order ID: ${orderId}`;
}