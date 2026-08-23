// 8. Callback Hell

// // Consider this situation:

// getUser()
//    ↓
// getOrders()
//    ↓
// getPaymentDetails()
//    ↓
// sendEmail()

// Each operation depends on the result of the previous operation.

// Question: What is callback hell? Why does this type of code become difficult to maintain?
//This type of code is difficult to maintain as grandchild callback function is 
//completely depend on grandparent function so suppose something went wrong with grandparent function. this is weher debugging becomes messy.Callback hell is also known as pyramid of Doom

// You don't need to write code. Explain it as you would in an interview.
