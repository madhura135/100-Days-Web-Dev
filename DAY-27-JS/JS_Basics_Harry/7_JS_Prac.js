// Problem 2 — Simple Calculator Using switch

// Write a JavaScript program that works as a basic calculator using a switch statement.
// The program should:
// Take two numbers as input
// Take an operator as input:
// +
// -
// *
// /
// Perform the correct calculation
// Print the result
// Requirements
// Use:
// prompt() for input
// Number() for numeric conversion
// switch statement for operator checking
// Store final answer in a variable
// Print output using console.log()
// Use break after every case
// Use default for invalid operators
// ==========================================
// Simple Calculator Using switch Statement
// ==========================================

// Taking first number input from user
let n1 = Number(prompt("Enter first number"));

// Taking second number input from user
let n2 = Number(prompt("Enter second number"));

// Taking operator input from user
// Example: +  -  *  /
let operator = prompt("Enter operator (+, -, *, /)");

// Variable to store final result
let result;

// switch checks the operator value
switch (operator) {
  // Addition case
  case "+":
    result = n1 + n2;
    break;

  // Subtraction case
  case "-":
    result = n1 - n2;
    break;

  // Multiplication case
  case "*":
    result = n1 * n2;
    break;

  // Division case
  case "/":
    // Handling divide-by-zero
    if (n2 === 0) {
      result = "Cannot divide by zero";
    } else {
      result = n1 / n2;
    }

    break;

  // Runs when operator does not match any case
  default:
    result = "Invalid operator";
}

// Final output
console.log(result);
