/*find the avg of marks of students */
let marks = [35, 67, 87, 32, 89, 90, 100];
let sum = 0;
let avg = 0;
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
console.log("Sum: " + sum);
avg = sum / marks.length;
console.log("avg of students marks: " + avg);
