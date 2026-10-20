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
// Adding Value:
// Write JavaScript code to add a new property
// phone with the value "123-456-7890" to the student object. Log the updated student object.
console.log("Object before: ", student);
let change = "phone";
student["phone"] = "123-456-7890";
console.log("Object After: ", student);
