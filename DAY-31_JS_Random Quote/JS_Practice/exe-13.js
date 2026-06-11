/*Exercise 1 — shift-easy
You have a queue of people waiting:
let queue = ["Alice", "Bob", "Charlie", "Diana"];
Every time a person is served, they leave from the front. 
Remove the first person and print who was served, then print the remaining queue. */

let queue = ["Alice", "Bob", "Charlie", "Diana"];
let afterShift = queue.shift(); // first element will be removed and return it
console.log(`The person served was: ${afterShift}`);
console.log(`The remaining queue: ${queue}`);
