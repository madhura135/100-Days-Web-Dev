// 33. Check if Two Numbers are in Specific Ranges

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function checkNumInRange(num1, num2) {
  if (
    (num1 >= 40 && num1 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 40 && num2 <= 60) ||
    (num2 >= 70 && num2 <= 100)
  ) {
    return num1 + " " + num2;
  } else {
    return false;
  }
}
let num1 = Number(prompt("Enter 1st number:"));
let num2 = Number(prompt("Enter 2nd number:"));

console.log(checkNumInRange(num1, num2));
