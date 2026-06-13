/*🔴 Hard 1 — Remove and Add Together
let employees = [
  "Amit",
  "Priya",
  "Rahul",
  "Sneha",
  "Rohan"
];
Task
Remove "Rahul" and "Sneha".
Add "Kiran" and "Neha" at the same position.
Use only one splice() call.
Print the final array.
 */
let employees = ["Amit", "Priya", "Rahul", "Sneha", "Rohan"];
let newArr = employees.splice(2, 2, "Kiran", "Neha");
console.log(employees);
