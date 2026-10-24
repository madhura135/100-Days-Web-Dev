// Assignment 5 (Hard)
// Using the users array, print:
// Total users
// Number of adults (18+)
// Number of minors (<18)
// Name of the oldest user
// Average age of all users

let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
  { name: "Simran", age: 31 },
  { name: "Vikram", age: 45 },
  { name: "Riya", age: 19 },
];

console.log(`Total users are: ${users.length}`);

let adultTotal = 0;
let minorTotal = 0;
let oldestUser = users[0];
let totalAge = 0;

for (let i = 0; i < users.length; i++) {
 
  if (users[i].age >= 18) {
    adultTotal++;
  } else {
    minorTotal++;
  }

  // Find the oldest user
  if (users[i].age > oldestUser.age) {
    oldestUser = users[i];
  }

  // Calculate total age
  totalAge += users[i].age;
}

let averageAge = totalAge / users.length;

console.log(`Total adults are: ${adultTotal}`);
console.log(`Total minors are: ${minorTotal}`);
console.log(`Oldest user is: ${oldestUser.name}`);
console.log(`Average age of all users: ${averageAge}`);

