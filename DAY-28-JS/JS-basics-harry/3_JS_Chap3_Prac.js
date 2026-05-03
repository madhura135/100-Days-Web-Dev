// Exercise — Count Total Marks Using for...in
// Problem Statement
// Create an object that stores marks of different subjects.

// Using a for...in loop:

// Print all subject names with marks
// Calculate total marks
// Print the total marks at the end

// Expected Output:

// math : 85
// science : 90
// english : 78
// computer : 95

// Total Marks = 348
let marks = {
  math: 85,
  science: 90,
  english: 78,
  computer: 95,
};

let totalMarks = 0;

for (let key in marks) {
  console.log(key, ":", marks[key]);

  totalMarks = totalMarks + marks[key];
}
console.log("Total Marks =", totalMarks);
