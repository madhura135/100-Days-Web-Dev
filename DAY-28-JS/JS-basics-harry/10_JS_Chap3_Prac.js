//write the code to print 'Try again' until user enters correct number

let corectNum = 99;
let enteredNum;
do {
  enteredNum = Number(prompt("Enter the number: "));
  if (enteredNum !== corectNum) {
    console.log("Try again");
  }
} while (enteredNum !== corectNum);
console.log(
  "you entered correct number: " + "Correct number is : " + corectNum,
);
