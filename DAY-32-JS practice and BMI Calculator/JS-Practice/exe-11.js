/*🟢 Easy
let prices = [100, 200, 300];

Create a new array where every price is increased by 10% */
//map creates new array by performing operations on each element

let prices = [100, 200, 300];

let increasedPrices = prices.map((value) => {
  return value + (value * 10) / 100;
});

console.log(increasedPrices);
