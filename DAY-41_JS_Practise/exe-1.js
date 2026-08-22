const users = [
  { name: "A", age: 22, active: true },
  { name: "B", age: 17, active: true },
  { name: "C", age: 25, active: false },
  { name: "D", age: 30, active: true }
];

// Using filter(), return users who are 18+ and active.
// Expected Output
// [
//   { name: "A", age: 22, active: true },
//   { name: "D", age: 30, active: true }
// ]

const result = users.filter(user => user.age >= 18 && user.active);

console.log(result);


