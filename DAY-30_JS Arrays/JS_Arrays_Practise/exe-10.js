/*For an given array of prices and on that price 10% is off so you need to add these new values 
in an same price array with these 10% off price */
let priceArry = [300, 230, 150, 450, 600, 120];
let i = 0;
for (let price of priceArry) {
  let offer = price / 10;
  priceArry[i] = priceArry[i] - offer;
  console.log(`Value after offer ${priceArry[i]}`);
  i++;
}

//finalPrice = originalPrice - (originalPrice * 10 / 100);
