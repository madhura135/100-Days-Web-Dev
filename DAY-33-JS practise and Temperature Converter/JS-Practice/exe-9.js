// 2. In Q1 use confirm to ask the user if he wants to see the prompt again.

let runAgain = true;

while (runAgain) {
  let age = Number.parseInt(prompt("Enter your age:"));

  if (age >= 18) {
    alert("You can drive!");
  } else {
    alert("You cannot drive!");
  }

  runAgain = confirm("Do you want to check another age?");
}

console.log("Program ended.");
