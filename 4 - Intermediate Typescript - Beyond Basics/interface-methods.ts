//basic interfaces and methods
interface grill {
  heatUp(): void;
  cook(): void;
  coolDown(): void;
  type: string;
  isNew: boolean;
}

class SimpleGrill implements grill {
  type = 'Simple Grill';
  isNew = true;
  heatUp(): void {
    console.log('Heating up the grill');
  }
  cook(): void {
    console.log('Cooking food');
  }
  coolDown(): void {
    console.log('Cooling down the grill');
  }
  //additional properties
  public color: string;
  constructor(color: string) {
    this.color = color;
  }
}
// extended interface with additional properties and methods
type LargeGrill = grill & {
  grillHeight: number;
  grillType: string;
  addNewFeatures(): void;
  //additional methods
};
//example usage
class LargeGrillWithNewFeatures implements LargeGrill {
  type = 'Large Grill';
  isNew = true;
  heatUp(): void {
    console.log('Heating up the large grill');
  }
  cook(): void {
    console.log('Cooking food');
  }
  coolDown(): void {
    console.log('Cooling down the large grill');
  }
  grillHeight = 10;
  grillType = 'Induction';
  color = 'Red';
  addNewFeatures(): void {
    console.log('Adding new features to the grill');
  }
}

// difference between interfaces and types in TypeScript:
//example with tvs
interface TV {
  turnOn(): void;
  turnOff(): void;
  changeChannel(channel: number): void;
}
// example with smart tvs
type SmartTV = TV & {
  isSmart: boolean;
  connectToCloud(): void;
};
//The main difference is that interfaces can only define properties and methods, while types can also include additional properties and methods.
//example of difference in usage between interfaces and types

const simpleGrill: grill = new SimpleGrill('Red');
simpleGrill.heatUp(); // Output: Heating up the grill

const largeGrillWithNewFeatures: LargeGrill = new LargeGrillWithNewFeatures();

largeGrillWithNewFeatures.heatUp(); // Output: Heating up the large grill

//difference between interfaces and types in TypeScript:

type PersonType = {
  name: string;
  age: number;
};

interface PersonInterface {
  name: string;
  age: number;
};

//example of usage between interfaces and types

const person: PersonType = {
  name: 'John Doe',
  age: 30,
};

const person2: PersonInterface = {
  name: 'Jane',
  age: 25,
};

//type aliases can be used to create type aliases for other types

type PersonName = string;
type PersonAge = number;

const person3: { name: PersonName; age: PersonAge } = {
  name: 'Jane Doe',
  age: 35,
};