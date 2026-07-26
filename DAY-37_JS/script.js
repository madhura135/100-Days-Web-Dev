//grab the textarea
const inputArea = document.getElementById("textArea");
//to click on check
const checkBtn = document.getElementById("Check");

//to grab where we need to paste output

const output = document.getElementById("result");

//grab value from textarea
const stringValue = inputArea.value;

function pallindromeLogic(stringValue) {
  function splitString() {
    //1.split
    let r1 = stringValue.split();
    return r1;
  }
  //2.reverse
  function reverseString() {
    let r2 = r1.reverse();
    return r2;
  }
  //3.join
  function joinString() {
    let r3 = r2.join();
    return r3;
  }
  if (r3 === stringValue) {
    return (output.textContent = `Result: This is a Pallindrome`);
  } else {
    return (output.textContent = `Result: This is not a Pallindrome`);
  }
}
