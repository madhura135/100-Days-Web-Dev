/*Medium 1 — Adults
let people = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Sneha", age: 15 }
];
Task:
Return only adults (18 and above). */

let people = [
  { name: "Aman", age: 16 }, //peop
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Sneha", age: 15 },
];

let result = people.filter((people) => {
  return people.age >= 18;
});
console.log(result);
