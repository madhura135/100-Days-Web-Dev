/*
🟢 Easy — Sum of Numbers
let numbers = [10, 20, 30, 40];
Task

Find the total sum using reduce().
 */
let numbers = [10, 20, 30, 40];

let result = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(result);
