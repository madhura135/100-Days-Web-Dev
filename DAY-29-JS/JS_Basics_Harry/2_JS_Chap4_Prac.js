// trim()
// Exercise 1
// Take an email from user with extra spaces and clean it.
// Example:

// "    madhura@gmail.com    "

// Output:

// madhura@gmail.com

// let email = prompt("Enter your mail-Id: ");
// let cleanMail = email.trim();
// console.log(cleanMail);

let name = prompt("Enter something:");

if (name.trim() === "") {
  console.log("Input is empty");
} else {
  console.log("Valid input");
}
