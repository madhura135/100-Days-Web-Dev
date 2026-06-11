/*pop-tricky 

POP() Exercise 3 — Tricky

Given:

let technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js"
];
Tasks
Remove the last technology and store it in removed1
Remove another technology and store it in removed2
Print:
Removed: Node.js
Removed: React
Print the final array

Expected:
["HTML", "CSS", "JavaScript"]

*/

let technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
let removed1 = technologies.pop();
console.log(`Removed:${removed1}`);
let removed2 = technologies.pop();
console.log(`Removed:${removed2}`);
console.log(technologies);
