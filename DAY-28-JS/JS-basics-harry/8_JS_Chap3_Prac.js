// Exercise — ATM Password System (do...while Loop)
// Problem Statement
// Create a program that:
// Stores a correct password inside a variable
// Asks the user to enter the password
// Keeps asking again until the correct password is entered
// Once correct password is entered, print:
// Access Granted
// Requirements
// Use a do...while loop
// Use prompt() for input
// If password is wrong, print:
// Wrong Password. Try Again.
let correctPass = "madhura13";
let userPass;
do {
  userPass = prompt("Enter the passowrd: ");
  if (currentPass !== userPass) {
    console.log("Wrong Password. Try Again.");
  }
} while (correctPass !== userPass);
console.log(" Access Granted !");
