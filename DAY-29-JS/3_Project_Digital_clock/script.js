// Select the container div using class name
// querySelector returns the FIRST matching element
let displayTimeBox = document.querySelector(".container");

// Select button element
let button = document.querySelector("button");

// Function that will run when button is clicked
function onClickDisplay() {
  // Create new Date object
  // It takes current system time at that moment
  const now = new Date();

  // Create time string using template literals
  // getHours() -> current hour
  // getMinutes() -> current minute
  // getSeconds() -> current second
  const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  // Put time inside container div
  // textContent changes the text of element
  displayTimeBox.textContent = timeString;
}

// Add click event on button
// When button is clicked,
// onClickDisplay function will run
button.addEventListener("click", onClickDisplay);
