/*🟡 Medium
let names = ["aman", "priya", "rahul"];

Create a new array where the first letter of every name is capitalized. */

let names = ["aman", "priya", "rahul"];
let newNames = names.map((value) => {
  // 1. Capitalize first letter + 2. Add the rest of the lowercase string
  return value.charAt(0).toUpperCase() + value.slice(1);
});
console.log(newNames);
console.log(names);
