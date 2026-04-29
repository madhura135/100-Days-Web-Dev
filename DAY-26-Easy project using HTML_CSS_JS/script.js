let arrayColor = ["red", "blue", "yellow"];

const screen = document.querySelector("body");

function randomColor() {
  let randomIndex = Math.floor(Math.random() * arrayColor.length);
  screen.style.backgroundColor = arrayColor[randomIndex];
}

screen.addEventListener("click", randomColor);
