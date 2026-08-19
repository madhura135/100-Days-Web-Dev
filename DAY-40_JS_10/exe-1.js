
const users = [
  { id: 101, name: "Amit", age: 24, isActive: true },
  { id: 102, name: "Madhura", age: 26, isActive: false },
  { id: 103, name: "Priya", age: 22, isActive: true },
  { id: 104, name: "Rahul", age: 28, isActive: true }
];

let result1= users.filter(function(users){
    return users.isActive === true;
});

let result= result1.map(function(users){
    return { id: users.id, name: users.name};
});
console.log(result);




