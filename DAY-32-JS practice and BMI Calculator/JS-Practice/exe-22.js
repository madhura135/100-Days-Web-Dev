// 3. Filter for numbers divisible by 10 from a given array

let num = [22, 30, 50, 10, 71, 80];
let result = num.filter((value) => {
  return value % 10 == 0;
});
console.log(result);
