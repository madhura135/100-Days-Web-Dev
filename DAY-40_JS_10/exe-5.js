const employees = [
  { name: "A", salary: 60000, experience: 3 },
  { name: "B", salary: 40000, experience: 2 },
  { name: "C", salary: 80000, experience: 5 },
  { name: "D", salary: 70000, experience: 1 }
];
// Return employees whose:
// salary is greater than 50000
// AND experience is at least 3
// Return only their names.

let result=employees.filter(function(employee){
    return employee.salary>50000 && employee.experience>=3;
})
console.log(result);

let onlyNames=result.map(employee=>employee.name)

console.log(onlyNames); 