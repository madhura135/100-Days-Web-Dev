// Exercise — Guess the Final Output (while Loop)
// Problem Statement
// Write a program that:
// Starts with number 1
// Uses a while loop till 10
// Finds the sum of only even numbers
// Prints the final sum at the end

let num = 1;
let sum = 0;
while (num <= 10) {
  console.log(num);
  if (num % 2 === 0) {
    sum = sum + num;
  }
  num++;
}
console.log("Total of even number in 1-10 is: " + sum);
