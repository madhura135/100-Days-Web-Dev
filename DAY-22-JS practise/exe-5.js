// 41. Return 30, 40, or 20 Based on Same Numbers

// Write a JavaScript program to check a set of three numbers;
// if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function checkSetOf3Num(num1, num2, num3) {
  const uniqueCount = new Set([num1, num2, num3]).size;
  if (uniqueCount === 1) return 30;
  if (uniqueCount === 2) return 40;
  return 20;
}
console.log(checkSetOf3Num(20, 20, 20)); //30
console.log(checkSetOf3Num(20, 20, 10)); //40
console.log(checkSetOf3Num(2, 22, 20)); //20
