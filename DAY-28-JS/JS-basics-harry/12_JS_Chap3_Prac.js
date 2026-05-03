// Exercise 1 — Arrow Function Without Parameters
// Problem Statement

// Create an arrow function that:

// prints "Welcome Madhura!"
// calls the function after creating it
// Expected Output
// Welcome Madhura!
let person = prompt("Enter your name: ");
const greetPerson = () => {
  console.log("Welcome " + person);
};
greetPerson();

// Exercise 2 — Arrow Function With Parameters
// Problem Statement

// Create an arrow function that:

// takes two numbers as parameters
// returns their multiplication
// print the final result

let num1 = prompt("Enter number1: ");
let num2 = prompt("Enter number2: ");

const calMulti = (num1, num2) => {
  let result = num1 * num2;
  console.log("Result of multiplication " + result);
};
calMulti(num1, num2);
