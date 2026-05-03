// Exercise — Find Factorial Using for...of Loop
// Problem Statement
// Create an array containing numbers from 1 to 5.
// Using a for...of loop:
// Traverse each number in the array
// Calculate the factorial by multiplying all numbers
// Print the final factorial value at the end
// Expected Output
// Factorial = 120
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let factorial = 1;
for (let num of array) {
  factorial = factorial * num; //1 //2//6//24//120
}
console.log(factorial);
