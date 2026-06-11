/*pop-medium

let tasks = ["Study JS", "Practice Arrays", "Build Project"];

Tasks
Remove the last task
Store it in completedTask
Print:
Completed Task: Build Project
Print:
Remaining Tasks: 2

(Hint: Use .length)

*/

let tasks = ["Study JS", "Practice Arrays", "Build Project"];
let completedTask = tasks.pop();
console.log(`Completed Task:${completedTask}`);
console.log(`Remaining Tasks:${tasks.length}`);
console.log(tasks);
