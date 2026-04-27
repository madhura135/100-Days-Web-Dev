// 8. Evaluate Grades Based on Total Marks and Final Exam

// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade.
// The grading criteria are as follows:

// If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater.
// Assume that final examination means we pass 'true' as second parameter otherwise blank.
// If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
//'-----------------------------------------------------------------------------------------
//steps
// 1.We just need to return true or false.
// 2.If the student got marks >=89 then A+ and return true
// 3. but for final exam if marks should be >=90 for A+ then we will return true

function checkGrade(totalMarks, isFinal = false) {
  if (isFinal) {
    return totalMarks >= 90 && totalMarks <= 100;
  } else {
    return totalMarks >= 89 && totalMarks <= 100;
  }
}

// Test cases
console.log(checkGrade(89)); // true
console.log(checkGrade(89, true)); // false
console.log(checkGrade(90, true)); // true
console.log(checkGrade(90, false)); // true
console.log(checkGrade(70)); // false
