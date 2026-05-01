let countElement = document.getElementById("count");
let message = document.getElementById("msg");

//-------------------------------------------------------------------------logic for increment
let plus = document.getElementById("plus");
let countstart = 0;
function increment() {
  countstart++;

  countElement.textContent = countstart;

  console.log(countstart);
  message.innerHTML = "Positive Energy";
  updateMood();
}

plus.addEventListener("click", increment);
//------------------------------------------------------------------------------logic for decrement
let minus = document.getElementById("minus");
function decrement() {
  countstart--;
  countElement.textContent = countstart;
  console.log(countstart);
  message.innerHTML = "Negative Energy";
  updateMood();
}
minus.addEventListener("click", decrement);
//------------------------------------------------------------------------------logic for reset
let resetBtn = document.getElementById("reset");
function resetCounter() {
  countstart = 0;

  countElement.textContent = countstart;

  console.log(countstart);
  message.innerHTML = "Neutral Energy";
  updateMood();
}

resetBtn.addEventListener("click", resetCounter);
function updateMood() {
  if (countstart > 0) {
    countElement.style.color = "green";
  } else if (countstart < 0) {
    countElement.style.color = "red";
  } else {
    countElement.style.color = "black";
  }
}
