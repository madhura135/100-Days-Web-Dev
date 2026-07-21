// 3. In the previous question, use console.error to log the error if the age entered is negative.

let runAgain = true;

while (runAgain) {
  let age = Number(prompt("Enter your age:"));

  if (age >= 18) {
    alert("You can drive!");
  } else if (age < 18 && age >= 1) {
    alert("You cannot drive!");
  } else if (age <= 0) {
    console.error(`Ohoo you entered negative number or age = 0 !!`);
  } else {
    console.log(`Rehnde bhai !!`);
  }

  runAgain = confirm("Do you want to check another age?");
}

console.log("Program ended.");
