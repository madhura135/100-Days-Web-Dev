const numbers = [10, 15, 20, 25, 30, 35];
// Using filter(), create a new array containing numbers that are:
// greater than 15
// divisible by 5
// less than 31
// [20, 25, 30]
// Interviewer follow-up: Explain whether filter() modifies the original array.

let result=[];

result=numbers.filter(number=>number>15&&(number%5==0)&&number<31);
console.log(result);
//Explain whether filter() modifies the original array.
//no, filter doesn't modifies the original array,
// it only filters as per the condition given and usuaaly returns array lesser than OG array length