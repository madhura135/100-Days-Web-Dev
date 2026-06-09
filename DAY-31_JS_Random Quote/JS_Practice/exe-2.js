/*Exe-2 for Map, Create a new array after adding 18% GST.*/
let prices = [100, 200, 300, 400];
const arrWithGst = prices.map((value) => {
  return value + (value * 18) / 100;
});
console.log(arrWithGst);
