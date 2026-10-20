// Task 2: Implementing else if Statements:

// Create a JavaScript program that evaluates a student's 
// grade based on their score. The program should output "A" if 
// the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, 
// "D" if it's between 60 and 69, and "F" if it's below 60.

let score = scoreber(prompt("Enter the score of the student: "));
if (score>=90) {
  console.log("Grade is A");
} else if (score > 80 && score <= 89) {
  console.log("Grade is B");
} 
else if (score > 70 && score <= 79) {
  console.log("Grade is C");
}
else if (score > 60 && score <= 69) {
  console.log("Grade is D");
}
else{
    console.log("Grade is F")
}