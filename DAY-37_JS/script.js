// Grab the textarea
const inputArea = document.getElementById("textArea");

// Grab the check button
const checkBtn = document.getElementById("Check");

// Grab where we need to show output
const output = document.getElementById("result");

function pallindromeLogic(stringValue) {
  // 1. Split
  let r1 = stringValue.split("");

  // 2. Reverse
  let r2 = r1.reverse();

  // 3. Join
  let r3 = r2.join("");

  // 4. Compare
  if (r3 === stringValue) {
    output.textContent = `Result: This is a Palindrome`;
  } else {
    output.textContent = `Result: This is not a Palindrome`;
  }
}

checkBtn.addEventListener("click", function () {
  // Grab value AFTER the user clicks
  const stringValue = inputArea.value;

  pallindromeLogic(stringValue);
});
