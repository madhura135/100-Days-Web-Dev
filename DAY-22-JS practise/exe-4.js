// 40. Check if Integer is 8 or Difference/Sum Equals 8
// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function isEightOrSumOrDiff(num1, num2) {
  return (
    num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8
  );
}

// Test cases
console.log(isEightOrSumOrDiff(8, 8)); // true
console.log(isEightOrSumOrDiff(4, 4)); // true
console.log(isEightOrSumOrDiff(0, 8)); // true
console.log(isEightOrSumOrDiff(16, 8)); // true
console.log(isEightOrSumOrDiff(12, 4)); // true
console.log(isEightOrSumOrDiff(3, 2)); // false
