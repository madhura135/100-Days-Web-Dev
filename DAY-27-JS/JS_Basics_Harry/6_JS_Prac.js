//undertsnad the flow for switch statement in js and write the
// Problem Statement

// Write a JavaScript program that takes a number from 1 to 7 and prints the corresponding weekday using a switch statement.

// Day Mapping
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday

let day = Number(prompt("enter the number"));

switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thurs");
    break;

  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("Invalid number");
}
