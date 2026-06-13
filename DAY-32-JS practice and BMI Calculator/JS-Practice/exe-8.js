/*🟡 Medium 1 — Replace One Element
let cities = ["Nagpur", "Mumbai", "Pune", "Delhi"];
Task
Replace "Pune" with "Ahmedabad" using a single splice() call.
Print the updated array. */

// let cities = ["Nagpur", "Mumbai", "Pune", "Delhi"];

// let newArr = cities.splice(2, 1, "Ahmedabad");
// console.log(cities);

/*
🟡 Medium 2 — Remove Multiple Elements
let numbers = [10, 20, 30, 40, 50, 60];
Task
Remove 30, 40, and 50 using one splice() call.
Store removed values in a variable.
Print:
Removed values
Updated array */

let numbers = [10, 20, 30, 40, 50, 60];
let splicedNum = numbers.splice(2, 3);
console.log(splicedNum);
console.log(numbers);
