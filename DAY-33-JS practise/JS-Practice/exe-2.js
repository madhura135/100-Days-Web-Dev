/*🔴 Hard 3
You have:
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

Delete students at odd indexes using a loop
After deleting, create a new clean array without holes using any method you know
Then add "Zara" to the beginning of the clean array
Print the final array and its length */

// Original array
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Step 1: Delete students at odd indexes
for (let i = 0; i < students.length; i++) {
  // Odd indexes are 1, 3, 5...
  if (i % 2 !== 0) {
    delete students[i];
  }
}

console.log("After delete:", students);
// Output:
// ["Alice", empty, "Charlie", empty, "Eve"]

// Step 2: Create a new clean array without holes
let cleanArray = [];

// Loop through the array containing holes
for (let i = 0; i < students.length; i++) {
  // If the element exists, add it to cleanArray
  if (students[i] !== undefined) {
    cleanArray.push(students[i]);
  }
}

console.log("Clean array:", cleanArray);
// Output:
// ["Alice", "Charlie", "Eve"]

// Step 3: Add Zara at the beginning
cleanArray.unshift("Zara");

// Step 4: Print final array and length
console.log("Final Array:", cleanArray);
console.log("Length:", cleanArray.length);

// Output:
// ["Zara", "Alice", "Charlie", "Eve"]
// Length: 4
