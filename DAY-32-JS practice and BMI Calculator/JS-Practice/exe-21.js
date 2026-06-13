// 2. Keep adding numbers to the array in (1) until 0 is added to the array.

let array = [];
let number;

do {
  number = Math.floor(Math.random() * 5);
  array.push(number);
} while (number !== 0);

console.log(array);
