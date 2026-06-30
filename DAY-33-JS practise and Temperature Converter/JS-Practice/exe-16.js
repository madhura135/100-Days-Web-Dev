/*🐍 Snake, Water, Gun Game
Problem Statement
Create a Snake-Water-Gun game in JavaScript where the user plays against the computer.
Rules
Snake drinks Water → Snake wins
Water drowns Gun → Water wins
Gun kills Snake → Gun wins
If both choose the same option → Draw */

let userInput = prompt("Enter S, W or G").toUpperCase();
let computerInput = ["S", "W", "G"][Math.floor(Math.random() * 3)];

console.log(
  `User input is ${userInput} and computer input is ${computerInput}`,
);

if (userInput != "S" && userInput != "W" && userInput != "G") {
  console.log("Invalid Input");
} else if (userInput == computerInput) {
  alert("Nobody DRAW!!");
} else if (userInput == "S" && computerInput == "W") {
  alert("User wins!!");
} else if (userInput == "W" && computerInput == "G") {
  alert(" User wins!!");
} else if (userInput == "G" && computerInput == "S") {
  alert("User wins!!");
} else if (computerInput == "S" && userInput == "W") {
  alert("Computer wins!!");
} else if (computerInput == "W" && userInput == "G") {
  alert("Computer wins!!");
} else if (computerInput == "G" && userInput == "S") {
  alert("Computer wins!!");
}
