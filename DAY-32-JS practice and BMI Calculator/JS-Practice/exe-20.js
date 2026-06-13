/*Create an array of numbers and take input from users to add numbers to this array */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let userInput = Number(prompt("Enter the number to add in array"));
array.push(userInput);

console.log(array);
console.log(`Number added: ${userInput}`);
