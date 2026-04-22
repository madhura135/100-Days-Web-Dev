// 34. Find Larger Number in Range 40?60

// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

// 1. two numbers from user
// 2. both should be Positive,
// 3. check if the two numbers lies in range 40 to 60 (num1>=40&&num1<=60)&&(num2>=40&&num2<=60)
// 4. if yes check diff=num1>num2-->return num1 else return num2
function checkRange(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    if (num1 !== num2) {
      if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
        if (num1 > num2) {
          console.log("Numbers are postive and in range 40 to 60");
          console.log("1st number " + num1 + " " + "is larger than 2nd" + num2);
        } else {
          console.log("Numbers are postive and in range 40 to 60");
          console.log("2nd number " + num2 + " " + "is larger than 1st" + num1);
        }
      } else {
        console.log("Numbers are postive but not in range 40 to 60");
      }
    } else if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
      console.log("Numbers are same but in range 40 to 60");
    }
  } else {
    console.log("Plz enter positive inputs");
  }
}
const testCases = [
  [45, 50],
  [30, 55],
  [60, 60],
  [-5, 50],
];

testCases.forEach(([a, b]) => {
  console.log("Testing:", a, b);
  checkRange(a, b);
});
