const buttons = document.querySelectorAll("button"); // querySelectorAll → “Give me all matching elements”

function check() {
  alert("I got clicked!!");
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", check);
}
// 🧠 Think like this:
// querySelector → “Give me the first matching element”
