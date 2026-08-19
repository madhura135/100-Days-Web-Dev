const users = [
  { name: "A", age: 22 },
  { name: "B", age: 17 },
  { name: "C", age: 25 },
  { name: "D", age: 16 }
];
// Return an array containing the names of users who are 18 or older, in uppercase.

let result= users.filter(function(user){
    return user.age>=18;
})
console.log(result);

let reqResult= result.map(user=>user.name);
console.log(reqResult);