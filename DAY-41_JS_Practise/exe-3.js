// 3. Reduce — Total Cart Value

// Given:
const cart = [
  { item: "Laptop", price: 50000, quantity: 1 },
  { item: "Mouse", price: 1000, quantity: 2 },
  { item: "Keyboard", price: 2000, quantity: 1 }
];

// Using reduce(), calculate the total cart value.
// Expected:54000

let result=cart.reduce((accumulator, currentValue) => {
  // return updated accumulator
   return accumulator=accumulator+((currentValue.price)*(currentValue.quantity));
},0);
console.log(result);




