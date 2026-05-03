// Print Student Details Using for...in Loop
// Problem Statement

// Write a JavaScript program that stores student information inside an object and prints all the keys and
// values using a for...in loop.
let student = {
  name: "Madhura",
  age: 25,
  course: "Web Development",
  city: "Pune",
};

for (let key in student) {
  console.log(key, ":", student[key]);
}
