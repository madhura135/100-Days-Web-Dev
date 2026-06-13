/*🟢 Easy 1 — Remove One Element
let colors = ["Red", "Blue", "Green", "Yellow"];
Task
Remove "Green" using splice().
Store the removed element in a variable.
Print:
Removed element
// Updated array */
// let colors = ["Red", "Blue", "Green", "Yellow"];
// let newArr = colors.splice(2, 1);
// console.log(newArr);
// console.log(colors);

/*🟢 Easy 2 — Add One Element
let fruits = ["Apple", "Banana", "Mango"];
Task
Add "Orange" between "Banana" and "Mango" using splice().
Print the updated array. */
let fruits = ["Apple", "Banana", "Mango"];

let newArr = fruits.splice(2, 0, "Orange");

console.log(fruits);
