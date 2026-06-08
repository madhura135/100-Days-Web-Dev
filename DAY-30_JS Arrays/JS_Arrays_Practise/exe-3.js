/* Popular array methods */
/*1. dot toString 
2.dot join("_") 
3.dot pop()-nothing to add in parenthesis 
4.push() add element that needs to be added
5.shift()
6.unshift() adds element in the beginning of the array and return its' length
7.delete operator
8.concat operator---does not modify orginal array
9.sort ---sorts array alphabetically and changes original array*/

const primitives = [
  "Hello", // String
  42, // Number
  123, // BigInt
  45997, // Boolean
  "yes",
  "8987",
  1248480,
];
const newArry = ["1", "2", "3"];
console.log(primitives);
// let deletedElement = delete primitives[1];
// console.log(deletedElement); //prints true
// console.log(primitives); // gives updated array with index 1 deleted
// let concatedArray = primitives.concat(newArry);
// console.log(concatedArray);
let compare = (a, b) => {
  //creates a variable that holds a function.
  return a - b;
};
let sortedArr = primitives.sort();
console.log(sortedArr);
console.log(primitives.sort(compare));
