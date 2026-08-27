// 🟡 Exercise 2 — Promise Chaining
// Create a function getUser() that resolves with:
// {
//     id: 101,
//     name: "Madhura",
//     role: "Frontend Developer"
// }
// Then create a Promise chain that:
// Gets the user.
// First .then() → print the complete user object.
// return only the user's name.
// Second .then() → convert the name to uppercase.
// return the uppercase name.
// Third .then() → print:
// User name: MADHURA
// Focus: return inside .then() and passing values between .then() callbacks.
function getUser() {
    return new Promise((resolve, reject) => {
        resolve({
            id: 101,
            name: "Madhura",
            role: "Frontend Developer"
        });
    });
}
getUser()
.then((userName)=>{
    // First .then() → print the complete user object.
    // return only the user's name.
    return userName.name;

})
// Second .then() → convert the name to uppercase.
// return the uppercase name.
.then((userNameCap)=>{
    return (userNameCap.toUpperCase());
})
// Third .then() → print:
// User name: MADHURA
.then((finalRes)=>{
    console.log(finalRes);
})
