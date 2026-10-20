// Task 3: Exploring Truthy/Falsy Concepts:

// Write a JavaScript function that
// takes a string as input and returns "Truthy"
// if the string is not empty, "Falsy" otherwise.

//0,-0,nan,undefined,'',"",null

let str = prompt("enter any string value: ");

function checkString(str) {
  if (str) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}
