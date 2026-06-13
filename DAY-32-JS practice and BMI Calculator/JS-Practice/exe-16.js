/*Hard 1 — Salary Range
let employees = [
  { name: "Amit", salary: 30000 },
  { name: "Priya", salary: 70000 },
  { name: "Rahul", salary: 50000 },
  { name: "Sneha", salary: 90000 }
];
Task:
Return employees earning between 40,000 and 80,000. */

let employees = [
  { name: "Amit", salary: 30000 },
  { name: "Priya", salary: 70000 },
  { name: "Rahul", salary: 50000 },
  { name: "Sneha", salary: 90000 },
];

let result = employees.filter((employee) => {
  return employee.salary >= 40000 && employee.salary <= 80000;
});

console.log(result);
