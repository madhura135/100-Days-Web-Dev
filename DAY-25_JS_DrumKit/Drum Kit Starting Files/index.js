//What input do I have?
// buttons
// //try to select all buttons using loop bcz we want diff sound for diff button
// What output do I want?-->style and audio
// What steps connect input to output?

let buttons = document.getElementsByClassName("drum"); //line selecting each button as a array element
let buttonCount = buttons.length;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",function()){
    event.target.style.color = "white";

  }
  
 
}
