// Assignment 2
// Create an arrow function calculateDiscount(price) that returns the price after a 15% discount.
// Test it with all prices.

let prices = [500, 1200, 999, 2500, 750];

let calculateDiscount = (price) => {
  let discount = price * 0.15;
  return price - discount;
};

for (let i = 0; i < prices.length; i++) {
  console.log(
    `Discount amount for price ${prices[i]} is ${calculateDiscount(prices[i])}`,
  );
}
