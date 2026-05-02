//Write the code to check if the number is divible by 2 or 3

let num = Number(prompt("enter the number"));
if (num % 2 === 0 || num % 3 === 0) {
  console.log("Number is divisible by either 2 or 3 and num is : " + num);
} else {
  console.log("Number is neither divisible by 2 nor 3 and num is : " + num);
}
