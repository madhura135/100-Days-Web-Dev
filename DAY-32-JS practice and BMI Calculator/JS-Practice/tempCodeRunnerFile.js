/*🔴 Hard
You have:
let students = ["Alice", "Bob"];
let newStudents = ["Charlie", "David"];
let vipStudents = ["Zara"];

Concatenate all three arrays into one
Then remove the last element using pop()
Then add "Eve" and "Frank" to the beginning using unshift()
Print the final array and its length */

let students = ["Alice", "Bob"];
let newStudents = ["Charlie", "David"];
let vipStudents = ["Zara"];
let newArr = students.concat(newStudents, vipStudents);
console.log(newArr);
newArr.pop();
console.log(newArr);
newArr.unshift("Eve", "Frank");
console.log(newArr);
console.log(newArr.length);
