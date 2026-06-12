/*🟢 Easy
You have [10, 20, 30, 40]. Delete the element at index 2. Print the array and its length. What do you expect? 
*/
// let array = [10, 20, 30, 40];
// let n = delete array[2];
// console.log(`Array : ${array}`);
// console.log(`length: ${array.length}`);

/* Medium
You have [1, 2, 3, 4, 5]. Delete index 1, then push 99. 
What will the final array look like and what is the length?*/

let arr2 = [1, 2, 3, 4, 5];
delete arr2[1];
arr2.push(99);
console.log(`Array: ${arr2}`);
console.log(`${arr2.length}`);
