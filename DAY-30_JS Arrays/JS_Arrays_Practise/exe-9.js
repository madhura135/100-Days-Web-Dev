/*For an given array of prices and on that price 10% is off so you need to make another array with these 10% off price */
let priceArry = [300, 230, 150, 450, 600, 120];
let newArry = [];
let newPrice;
for (let price of priceArry) {
  newPrice = price - (price * 10) / 100;
  newArry.push(newPrice);
}
console.log(priceArry);
console.log(newArry);
//finalPrice = originalPrice - (originalPrice * 10 / 100);
