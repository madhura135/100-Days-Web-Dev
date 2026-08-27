// Exercise 3 — E-commerce Order Flow
// You're building a simple order system.
// Create a function:
// placeOrder()
// that returns a Promise.
// Requirements
// let stockAvailable = true;
// Inside the Promise:
// If stockAvailable === true
// resolve("Order placed")
// Otherwise
// reject("Product out of stock")
// Use a setTimeout() of 1 second to simulate the server.
let stockAvailable = false;
function placeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(stockAvailable === true){
            resolve("Order placed");
        }
        else{
            reject("Product out of stock");
            }},1000); 
    })
}
// Order placed
// Payment successful
// Order confirmed
// Order process completed
placeOrder()
    .then((res) => {
        console.log(res);
        return "Payment successful";
    })
    .then((res2) => {
        console.log(res2);
        return "Order confirmed";
    })
    .then((res3) => {
        console.log(res3);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Order process completed");
    });

