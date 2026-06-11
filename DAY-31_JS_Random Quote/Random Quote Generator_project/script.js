let index;
const quotes = [
  "Less is more.",
  "Just keep going.",
  "Do it now.",
  "Stay curious always.",
  "Dream without fear.",
  "Be the change.",
  "Actions speak louder.",
  "Start before ready.",
  "Doubt kills dreams.",
  "Choose joy daily.",
  "Work in silence.",
  "Trust the process.",
  "Fall, rise, repeat.",
  "Live with purpose.",
  "Progress over perfection.",
];
/* To generate random number from 0 to 15 by using Math.random() and Math.round() */

function displayQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  document.getElementById("showQuote").textContent = quotes[index];
}

document.querySelector("button").addEventListener("click", displayQuote);
