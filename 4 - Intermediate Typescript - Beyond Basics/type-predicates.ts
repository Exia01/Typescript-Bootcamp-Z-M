//example, usage and best practices of type predicates in TypeScript
//What is a type predicate? A function that returns a boolean value and takes a type parameter as its argument.

function isString(value: any): value is string {
  return typeof value === 'string';
}

function printValue(value: any) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows value is a string here because of the type predicate
  } else {
    console.log('Invalid input');
  }
}

interface Square {
  type: 'Square';
  sideLength: number;
}

interface Circle {
  type: 'Circle';
  radius: number;
}

type shapeUnion = Square | Circle;
// TypeScript knows shape is either a Square or a Circle because of the type union
function isSquare(shape: shapeUnion): shape is Square {
  return shape.type === 'Square';
  // TypeScript knows shape is a Square because of the type predicate
}
function calculateSquareArea(shape: Square): number {
    if(isSquare(shape) ){
        return shape.sideLength * shape.sideLength;
    } else {
        throw new Error('Invalid input');
        // TypeScript will give an error here because shape is not a Square
    }
}


// Best practices:
