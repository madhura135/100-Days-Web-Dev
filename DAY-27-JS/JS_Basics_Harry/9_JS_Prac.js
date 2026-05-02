//Write the code to check if the number is divible by 2 and 3

let num = Number(prompt("enter the number"));
if (num % 2 === 0 && num % 3 === 0) {
  console.log("Number is divisible by 2 and 3 both and num is : " + num);
} else {
  console.log("Number is not divisible by 2 and 3 and num is : " + num);
}
