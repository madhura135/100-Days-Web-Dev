// Use reduce to calculate factorial of n

let n = Number(
  prompt("Enter the number whose factorial needs to be calculated"),
);

// Create array [1, 2, 3, ..., n]
let numbers = [];

for (let i = 1; i <= n; i++) {
  numbers.push(i);
}

// Calculate factorial using reduce
let factorial = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1);

console.log(factorial);

// array.reduce((acc, curr) => {
//   // logic
// }, initialValue);
