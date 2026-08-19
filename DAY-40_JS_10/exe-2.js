const orders = [
    { id: 1, customer: "Amit", amount: 1200, status: "delivered" },
    { id: 2, customer: "Priya", amount: 800, status: "pending" },
    { id: 3, customer: "Rahul", amount: 2500, status: "delivered" },
    { id: 4, customer: "Neha", amount: 1500, status: "cancelled" }
];
// Using map(), transform it into:

// [
//     { id: 1, customer: "Amit", amount: 1320 },
//     { id: 2, customer: "Priya", amount: 880 },
//     { id: 3, customer: "Rahul", amount: 2750 },
//     { id: 4, customer: "Neha", amount: 1650 }
// ]

// 10% tax must be added to every amount.

 let discountAmount=orders.map(function culculateTax(orders){
   return {id: orders.id,customer: orders.customer,amount: orders.amount + (orders.amount * 0.10)};
})

console.log(discountAmount);
   


    

