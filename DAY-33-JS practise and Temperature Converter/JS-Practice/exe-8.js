// Chapter 6 - Practice Set

// 1. Write a program using prompt function to take input of age as a value from the user
//    and use alert to tell him if he can drive!

let age = Number.parseInt(prompt("Enter your age: "));
if (age >= 18) {
  alert("You can drive !!");
} else {
  alert("You can not drive !! You are a child !! ");
}
