// 32. Find Closest Value to 100 from Two Numbers
// Write a JavaScript program to find the closest value to 100 from two numerical values.
//
function checkNear100(num1, num2) {
  let diff1 = Math.abs(100 - num1);
  let diff2 = Math.abs(100 - num2);

  if (diff1 < diff2) {
    return "Num1 is closest to 100: " + num1;
  } else if (diff2 < diff1) {
    return "Num2 is closest to 100: " + num2;
  } else {
    return "Both numbers are equally close to 100";
  }
}

let num1 = Number(prompt("Enter 1st number:"));
let num2 = Number(prompt("Enter 2nd number:"));

console.log(checkNear100(num1, num2));
