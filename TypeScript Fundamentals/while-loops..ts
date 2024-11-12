//Example of while loop in TypeScript
let maxWhileLoopIterations = 5;
while (maxWhileLoopIterations > 0) {
  if (maxWhileLoopIterations == 2) {
    continue;// Skip the iteration if maxWhileLoopIterations equals 2
  }
  console.log(maxWhileLoopIterations);
  maxWhileLoopIterations--;
}

//Example of do-while loop in TypeScript

let maxDoWhileLoopIterations = 5;
do {
  console.log(maxDoWhileLoopIterations);
  maxDoWhileLoopIterations--;
} while (maxDoWhileLoopIterations > 0);
