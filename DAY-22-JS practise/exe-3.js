// 39. Sum Two Integers and Return Based on Range
// Write a JavaScript program to compute the sum of the two given integers.
// If the sum is in the range 50..80 return 65 otherwise return 80.

//step 1. take two interger from user 2. cal sum of it 3. if some is in range from 50 to 80 then return 65 and if not then return 80

let num1, num2;

function checkRangeSum(num1, num2) {
  let sum = num1 + num2;
  if (sum >= 50 && sum <= 80) {
    return "65";
  } else {
    return "80";
  }
}
console.log(checkRangeSum(30, 20));
console.log(checkRangeSum(50, 20));
console.log(checkRangeSum(30, 50));
console.log(checkRangeSum(30, 90));
console.log(checkRangeSum(30, 0));
