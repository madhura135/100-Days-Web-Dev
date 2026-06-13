/*1️⃣ reverse()
🟢 Easy
let fruits = ["Apple", "Banana", "Mango"];

Reverse the array and print it.
*/
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.reverse();
// console.log(fruits);

/*
let numbers = [10, 20, 30, 40, 50];

Create a copy of the array, reverse the copy, and confirm the original array remains unchanged.
//  */
// let numbers = [10, 20, 30, 40, 50];
// let copyNumbers = [...numbers];
// copyNumbers.reverse();
// console.log(`OG remains unchnaged ${numbers}`);
// console.log(copyNumbers);

/*🔴 Hard
let names = ["Aman", "Priya", "Rahul", "Sneha"];

Without using reverse(), create a new array containing the elements in reverse order. */

let names = ["Aman", "Priya", "Rahul", "Sneha"];
let newReversedArray = [];
for (let i = names.length - 1; i >= 0; i--) {
  newReversedArray.push(names[i]);
}
console.log(`OG array ${names}`);
console.log(`New reverse array ${newReversedArray}`);
