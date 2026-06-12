/*🟢 Easy
You have two arrays:
jslet fruits = ["Apple", "Mango"];
let veggies = ["Carrot", "Potato"];
Concatenate both arrays into one new array and print it. 
Also confirm the original arrays are unchanged. */

// let fruits = ["Apple", "Mango"];
// let veggies = ["Carrot", "Potato"];
// let newArr = fruits.concat(veggies);
// console.log(newArr);
// console.log(fruits);
// console.log(veggies);

/*
🟡 Medium
You have:
jslet a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
Concatenate all three arrays without using concat() method — use only the spread operator. Print the result.
 */

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
let newArr = [...a, ...b, ...c];
console.log(newArr);
