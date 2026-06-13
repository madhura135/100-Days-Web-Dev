/*Hard — Shopping Cart Total
let cart = [
  { item: "Phone", price: 50000 },
  { item: "Laptop", price: 80000 },
  { item: "Tablet", price: 30000 }
];
Task
Calculate the total cart value using reduce().
Expected:
160000 */

// Important pattern
// array.reduce((acc, curr) => {
//   return acc + curr.someProperty;
// }, 0);

let cart = [
  { item: "Phone", price: 50000 },
  { item: "Laptop", price: 80000 },
  { item: "Tablet", price: 30000 },
];

let result = cart.reduce((accumulator, current) => {
  return accumulator + current.price;
}, 0);

console.log(result);
