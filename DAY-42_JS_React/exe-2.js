// Exercise 1 — Basic Resolve

// Create a Promise called checkLogin.

// If isLoggedIn is true, call resolve() with "User logged in successfully".
// Otherwise, call reject() with "User is not logged in".
// Consume the Promise using .then() and .catch().
const isLoggedIn = false;

const checkLogin = new Promise((resolve, reject) => {
    if (isLoggedIn) {
        resolve("User logged in successfully");
    } else {
        reject("User is not logged in");
    }
});

checkLogin
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

