/*
Medium — Find Largest Number
let numbers = [15, 80, 25, 100, 45];
Task:
Use reduce() to find the largest number.
Expected:
100*/
let numbers = [15, 80, 25, 100, 45];

let result = numbers.reduce((greatest, current) => {
  if (current > greatest) {
    return current;
  } else {
    return greatest;
  }
});

console.log(result);
