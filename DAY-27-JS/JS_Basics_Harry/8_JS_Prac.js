// Problem 3 — Traffic Light System Using switch
// Problem Statement
// Write a JavaScript program that acts like a traffic light system using a switch statement.
// The program should:
//Take a traffic light color as input from the user
// Print the correct traffic instruction based on the color
// Traffic Rules
// red    → STOP
// yellow → READY
// green  → GO
// Important Condition (Tricky Part)
// The program should work for:
// RED
// Red
// red
// rEd
// All should give:
// STOP
// That means:
// input should be case-insensitive
// user can type uppercase or lowercase
// Requirements
// Use:
// prompt()
// switch
// toLowerCase()
// Store final output in a variable
// Print output using console.log()
// Use break after each case
// Use default for invalid colors

let color = prompt("Enter the traffic light color");
let result;

if (color !== null) {
  color = color.toLowerCase();

  switch (color) {
    case "red":
      result = "STOP";
      break;

    case "yellow":
      result = "READY";
      break;

    case "green":
      result = "GO";
      break;

    default:
      result = "Invalid traffic color";
  }

  console.log(result);
} else {
  console.log("No input provided");
}
