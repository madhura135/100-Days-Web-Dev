//Try to add new key to const object

const student = {
  name: "Lila",
  marks: 56,
  rollNum: 34,
};
student.age = 45;
student["subject"] = "English";
console.log(student);

// Use:
// dot notation → when key name is fixed
// bracket notation → when key comes dynamically
