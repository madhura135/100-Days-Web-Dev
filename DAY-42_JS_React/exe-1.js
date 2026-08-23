// Create a Simple Promise:

// 1. Write a JavaScript function that returns a Promise that resolves with a "Hello, World!" message after 1 second.

const promise = new Promise((resolve, reject) => {
    setTimeout(function res() {
        resolve("Hello, World!");
    }, 1000);
});                            // ✅ closes new Promise(...), plus semicolon

console.log(promise);         // logs: Promise { <pending> }

promise.then((message) => console.log(message)); // logs "Hello, World!" after 1s
