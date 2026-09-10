// Find the second largest number: Write a function to find the second highest number in an array without sorting it.

const numbers = [45, 12, 89, 34, 67, 23, 91, 56]; //Find the second largest number:
let highest;
let secondHighest;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i + 1]) {
    highest = numbers[i];
  }
  for (let j = 0; j < numbers.length - 1; j++) {
    if (highest > numbers[j] && highest != secondHighest) {
      secondHighest = numbers[i];
    }
  }
}

console.log(highest);
console.log(secondHighest);
