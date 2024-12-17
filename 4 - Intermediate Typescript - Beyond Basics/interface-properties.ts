// 1. Interface to define the address structure (Recommended for object contracts)
interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: number;
  }
  
  // 2. Type alias for addressZip (Simple primitive type alias)
  type AddressZip = number;  // Type aliases work well for simple types
  
  // 3. Address object, type-checked with the Address interface
  const johnsAddress: Address = {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: 10001,
  };
  
  // 4. Function using the Address interface for type checking
  function printAddress(address: Address) {
    console.log(`Street: ${address.street}`);
    console.log(`City: ${address.city}`);
    console.log(`State: ${address.state}`);
    console.log(`Zip Code: ${address.zipCode}`);
  }
  
  // 5. Class implements the Address interface (Ensures class structure)
  class CustomerAddress implements Address {
    street: string;
    city: string;
    state: string;
    zipCode: number;
  
    constructor(street: string, city: string, state: string, zipCode: number) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
    }
  
    // Method to print address (additional functionality)
    printAddress() {
      console.log(`Street: ${this.street}`);
      console.log(`City: ${this.city}`);
      console.log(`State: ${this.state}`);
      console.log(`Zip Code: ${this.zipCode}`);
    }
  
    // Method to get address zip (returns a number, addressZip type)
    getAddressZip(): AddressZip {
      return this.zipCode;
    }
  }
  
  // 6. Create an instance of CustomerAddress and use the methods
  const customer = new CustomerAddress('456 Elm St', 'Los Angeles', 'CA', 90001);
  printAddress(customer);
  
  // 7. Type alias for lawnMover (Simple contract with a property only)
  type LawnMover = {
    manufacturer: string;
  };
  
  // 8. Interface for a more complex lawnMover (including method)
  interface LawnMoverInterface {
    manufacturer: string;
    mowLawn(): void;
  }
  
  // 9. Class implements the LawnMoverInterface (Enforces manufacturer + mowLawn)
  class Mower implements LawnMoverInterface {
    manufacturer: string;
  
    constructor(manufacturer: string) {
      this.manufacturer = manufacturer;
    }
  
    mowLawn(): void {
      console.log(`Mower ${this.manufacturer} is mowing lawn.`);
    }
  
    // Extra method added to the class, not in the interface
    getMowerType(): string {
      return `Mower Type: ${this.manufacturer}`;
    }
  }
  
  // 10. Create an instance of Mower and use the methods
  const lawnmower = new Mower('Honda');
  lawnmower.mowLawn();
  console.log(lawnmower.getMowerType());
  