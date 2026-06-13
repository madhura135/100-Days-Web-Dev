// 🟢 Easy
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Task:

// Create a new array containing only "Banana" and "Mango" using slice().
// Print both arrays.
// Confirm the original array remains unchanged.

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// let sliced = fruits.slice(1, 3); //starts with starting index(including) and till end index(excluding last index)
// console.log(sliced);
// console.log(fruits);

/*let numbers = [10, 20, 30, 40, 50, 60, 70];

Task:-Medium

Create a new array containing the last 3 elements using slice().
Do not hardcode indexes like 4.
Print the result. */

let numbers = [10, 20, 30, 40, 50, 60, 70];
let sliced = numbers.slice(numbers.length - 3); //
console.log(sliced);
