//showing implementations of functions and arrow functions
//both are function expressions, they are assigned to variables, but they have different types
const printCatSound = (): void => {
  console.log('Meow!');
};

printCatSound(); // Output: Meow!

const printDogSound = function (): void {
  console.log('Woof!');
};

//using type alias for helper function and utilizing with other function

type SoundFunction = () => void;

function playSound(sound: SoundFunction): void {
  sound();
}

playSound(printCatSound); // Output: Meow!