let countElement = document.getElementById("count");
let message = document.getElementById("msg");

//-------------------------------------------------------------------------logic for increment
let plus = document.getElementById("plus");
let countstart = 0;

function increment() {
  countstart++;

  countElement.textContent = countstart;

  console.log(countstart);

  // corrected: message should depend on final count value
  // not directly on button type
  updateMood();
}

plus.addEventListener("click", increment);

//------------------------------------------------------------------------------logic for decrement
let minus = document.getElementById("minus");

function decrement() {
  countstart--;

  countElement.textContent = countstart;

  console.log(countstart);

  // corrected: message should depend on final count value
  // not directly on button type
  updateMood();
}

minus.addEventListener("click", decrement);

//------------------------------------------------------------------------------logic for reset
let resetBtn = document.getElementById("reset");

function resetCounter() {
  countstart = 0;

  countElement.textContent = countstart;

  console.log(countstart);

  // corrected: removed direct message update
  // updateMood will handle it
  updateMood();
}

resetBtn.addEventListener("click", resetCounter);

function updateMood() {
  // corrected: mood text and color should be updated together
  // based on current count value

  if (countstart > 0) {
    countElement.style.color = "green";
    message.innerHTML = "Positive Energy";
  } else if (countstart < 0) {
    countElement.style.color = "red";
    message.innerHTML = "Negative Energy";
  } else {
    countElement.style.color = "black";
    message.innerHTML = "Neutral Energy";
  }
}
