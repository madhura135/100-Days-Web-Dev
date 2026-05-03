//Write the sample code for For loop
// Problem — Sum of Numbers from 1 to N
// Problem Statement
// Write a JavaScript program that takes a number N from the user and calculates the sum of
// all numbers from 1 to N using a for loop.

let num = Number(prompt("Enter the number:"));
num = parseInt(num);
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum = sum + i;
}
console.log(
  "sum of all numbers till num is: " + sum + " and the num is: " + num,
);
