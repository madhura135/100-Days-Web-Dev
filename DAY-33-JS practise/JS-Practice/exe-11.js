// 4. Write a program to change the URL to google.com (Redirection)
//    if the user enters a number greater than 4.

let num = Number.parseInt(prompt("Enter the number"));
if (num > 4) {
  window.location.replace("https://www.google.com/");
} else {
  console.log("OK");
}
