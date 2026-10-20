let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};
console.log("Object before: ", student);
delete student.grade;
console.log("Object After: ", student);

// Removing Value:
// Write JavaScript code to remove the grade property from the student object.
// Log the updated student object before and after the removal.
