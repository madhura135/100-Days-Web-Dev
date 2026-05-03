// write the code to find mean of 5 numbers

let arrayNum = [34, 50, 20, 10, 80];

let sum = 0;

for (let i = 0; i < arrayNum.length; i++) {
  sum = sum + arrayNum[i];
}

let mean = sum / arrayNum.length;

console.log("Mean of the 5 numbers is: " + mean);
