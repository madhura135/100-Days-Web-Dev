/* Popular array methods */
/*1. dot toString 
2.dot join("_") 
3.dot pop()-nothing to add in parenthesis 
4.push() add element that needs to be added
5.shift()
6.unshift() adds element in the beginning of the array and return its' length*/

const primitives = [
  "Hello", // String
  42, // Number
  123n, // BigInt
  true, // Boolean
  "yes",
  "8987",
  1248480,
];
console.log(primitives);

// const newLength = primitives.push(999);
// console.log(primitives);
// console.log(newLength);
// let n = primitives.shift();
// console.log(n); // prints first element of the array that is Hello
// console.log(primitives); // prints modified array

let b = primitives.unshift("yayyay");
console.log(b); //prints new length of the arry
console.log(primitives); //prints new array
