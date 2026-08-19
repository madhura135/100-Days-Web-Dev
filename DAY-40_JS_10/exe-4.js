const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];
// Create a new array where each product becomes:
// {
//   name: "Laptop",
//   priceWithGST: 59000
// }
// Assume GST = 18%.

let result= products.map(function(product){
    return { name: product.name , priceWithGST:(product.price)*1.18};//Base Amount × 1.18
})
console.log(result);
