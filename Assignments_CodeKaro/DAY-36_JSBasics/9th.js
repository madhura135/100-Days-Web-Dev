// Conditionals assignment
// Task 1: Understanding if Statements:
// Write a JavaScript function that takes a number as input and
// returns "Positive" if the number is greater than 0,
// "Negative" if it's less than 0, and "Zero" if it's equal to 0.

let num = Number(prompt("Enter the number: "));
if (num == 0) {
  console.log("Number is zero");
} else if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}
