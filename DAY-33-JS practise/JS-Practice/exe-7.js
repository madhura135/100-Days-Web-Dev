// Exercise 1 - Guess the Number

// Write a JavaScript program to generate a random number and store it in a variable.
// The program then takes an input from the user to tell them whether the guess was correct,
// greater or lesser than the original number.
// 100 - (no. of guesses) is the score of the user.
// The program is expected to terminate once the number is guessed.
// Number should be between 1 - 100.
// user enters a guess
// Guess the Number Game

// Guess the Number Game

let ranNum = Math.floor(Math.random() * 100) + 1;

// For testing only
//console.log("Secret Number:", ranNum);

let attempts = 0;
let userInput;
let guesses = [];

while (userInput !== ranNum) {
  userInput = Number(prompt("Guess a number between 1 and 100"));

  if (isNaN(userInput)) {
    console.log("❌ Please enter a valid number.");
    continue;
  }

  attempts++;
  guesses.push(userInput);

  console.log(`Your guesses so far: ${guesses.join(", ")}`);

  if (userInput === ranNum) {
    let score = Math.max(0, 100 - attempts);

    console.log(
      `🎉 Congratulations! You guessed the correct number: ${ranNum}`,
    );
    console.log(`Attempts used: ${attempts}`);
    console.log(`Score: ${score}`);
    console.log(`All guesses: ${guesses.join(", ")}`);
  } else if (userInput > ranNum) {
    console.log("📈 Your guess is greater than the original number.");
    console.log(`Guesses left: ${100 - attempts}`);
  } else {
    console.log("📉 Your guess is less than the original number.");
    console.log(`Guesses left: ${100 - attempts}`);
  }
}
