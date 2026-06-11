/*Implement your own myUnshift(arr, ...items) 
function that mimics the built-in unshift without using it. */

//1.We need to build a funct which mimic unshift
//2.means function should add element at the start of the array and return the updated length of the array
//3. start of the array = array[0] always and for updated length array.length

let array = [];
let index = 0;
let x = "Apple";
function mimicUnshift(element) {
  array[index - 1] = element;
  index = index - 1;
  console.log(array);
}
mimicUnshift(x);
mimicUnshift(78);
mimicUnshift("Day");
