//examples and best practices of unions in typescript
type rainbowColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';
//it can only be one of these values at a time
const myFavoriteColor: rainbowColor = 'red'; // type checking is done at compile time

function greetColor(color: rainbowColor): void {
  switch (color) {
    case 'red':
      console.log('The sky is red');
      break;
    case 'orange':
      console.log('The sun is orange');
      break;
    case 'yellow':
      console.log('The grass is yellow');
      break;
    case 'green':
      console.log('The flowers are green');
      break;
    case 'blue':
      console.log('The sea is blue');
      break;
    case 'indigo':
      console.log('The mountains are indigo');
      break;
    case 'violet':
      console.log('The rivers are violet');
      break;
    default:
      console.log('Invalid color');
  }
}

greetColor('red'); // The sky is red

type oneTwoThree = 1 | 2 | 3;
// const four: oneTwoThree = 4; // type error: 4 is not assignable to type oneTwoThree

//unions are very useful when you want to combine different types into a single type

type AnimalUnion = 'dog' | 'cat' | 'bird';
type Pet = { name: string; animal: AnimalUnion };

function getPetInfo(pet: Pet): void {
  console.log(`Name: ${pet.name}, Animal: ${pet.animal}`);
}

getPetInfo({ name: 'Buddy', animal: 'dog' }); // Name: Buddy, Animal: dog

//we can use union as a return type for a function meaning it can return different types say string or number

function greetWithAnimal(pet: Pet): string | number {
  if (pet.animal === 'dog') {
    return `Woof, my name is ${pet.name}!`;
  } else if (pet.animal === 'cat') {
    return `Meow, my name is ${pet.name}!`;
  } else if (pet.animal === 'bird') {
    return `Chirp, my name is ${pet.name}!`;
  } else {
    return 'Invalid animal';
  }
}
