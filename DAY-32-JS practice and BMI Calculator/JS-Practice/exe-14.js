// 🟢 Easy 1 — Even Numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Task:
// Create a new array containing only even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let result = numbers.filter((value) => {
  return value % 2 == 0;
});

console.log(`Even numbers ${result}`);
