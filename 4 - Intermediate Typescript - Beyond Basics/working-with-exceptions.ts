//example of exceptions in TypeScript. Best practices on handling exceptions

//discount calculation function
//this stops code execution if the parameters are invalid
function calculateDiscount(price: number, discountPercentage: number): number {
  if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error(
      'Invalid input. Price and discount percentage must be positive numbers between 0 and 100.'
    );
  }

  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}

//a more refined version of the discount calculation function using try-catch
function calculateDiscountRefined(
    price: number,
    discountPercentage: number
  ): number {
    try {
      if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
        throw new Error(
          'Invalid input. Price and discount percentage must be positive numbers between 0 and 100.'
        );
      }
  
      const discountAmount = (price * discountPercentage) / 100;
      return price - discountAmount; // No need for 'as number' here
    } catch (error) {
      // Handle error: you can log it or take appropriate action.
      console.error('Error:', error);
  
      // You can return a default value or handle the exception as needed.
      return 0; // Returning 0 in case of an error
    }
  }