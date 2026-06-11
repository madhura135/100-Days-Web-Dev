/*Reverse an array without 
using .reverse() — use only unshift and a loop. */

let fruits = ["Mango", "Banana", "Apple", "Chikoo"];

//1. unshift adds new element at the beginning of the array and return the updatde length
//2. use loop-->take last index(element)-->take another array(empty)-->add that last element to this array
//3.Loop will run from last index and executes/iterate till 0th index/1st element
//4. to print new array
let newArray = [];
for (let i = 0; i < fruits.length; i++) {
  //0 0<4
  newArray.unshift(fruits[i]);
}
console.log(`New reverse array ${newArray}`);
