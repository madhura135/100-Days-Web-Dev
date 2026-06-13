/*
map() Hard
let students = [
  { name: "Aman", marks: 80 },
  { name: "Priya", marks: 90 },
  { name: "Rahul", marks: 70 }
];
Add:
grade: "Pass"
for marks ≥ 75, otherwise: grade: "Fail"
 */
let students = [
  { name: "Aman", marks: 80 },
  { name: "Priya", marks: 90 },
  { name: "Rahul", marks: 70 },
];

let result = students.map((student) => {
  if (student.marks >= 75) {
    return {
      name: student.name,
      marks: student.marks,
      grade: "Pass",
    };
  } else {
    return {
      name: student.name,
      marks: student.marks,
      grade: "Fail",
    };
  }
});

console.log(result);
