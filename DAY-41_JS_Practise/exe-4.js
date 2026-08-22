// 4. Reduce — Count Occurrences
// Given:
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];
// Using reduce(), return:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// Interviewer follow-up: Explain what the accumulator contains during each iteration.
let result= fruits.reduce((accumulator,currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++;
    }
    else{
        accumulator[currentValue]=1;
    }
    return accumulator;

},{});
console.log(result);