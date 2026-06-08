/*For of loop */

let matches = ["2013", "ten", "umtkp"];

for (let match of matches) {
  console.log(match);
}

for (let match in matches) {
  console.log(match); //this print keys/indexes and not values
}
