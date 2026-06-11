// /*Exercise 3 — shift
// You have a list of orders placed at a restaurant:
// let orders = ["Pizza", "Burger", "Pasta", "Sandwich"];
// The kitchen processes orders from oldest to newest.
// Keep removing the first order and print "Preparing: <order>" until the orders list is empty.
// Use a while loop.*/
let orders = ["Pizza", "Burger", "Pasta", "Sandwich"];
while (orders.length > 0) {
  let preparing = orders.shift();
  console.log(`"Preparing: ${preparing}`);
}
