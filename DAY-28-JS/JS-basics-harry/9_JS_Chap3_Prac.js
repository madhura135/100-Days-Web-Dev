// Write the code to print marks of the student object using for loop

let student = {
  happy: 56,
  Jiggi: 77,
  Maddy: 89,
};

for (let key in student) {
  console.log("marks" + "of student " + key + " " + student[key]);
}
