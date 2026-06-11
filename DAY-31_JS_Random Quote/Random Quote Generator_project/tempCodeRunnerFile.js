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

for(let index in quotes){
  index= Math.random() * 15;
let roundOffIndex= Math.round(index);
console.log(index);
console.log(roundOffIndex);

}

/* we will use for of loop bcz it return quote and not value so using that quote */
