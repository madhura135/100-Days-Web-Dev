// Exercise 3 — Promise Chaining
// Create a Promise that starts with the value 10.
// Then chain it so that:
// First .then() multiplies the value by 2.
// Second .then() adds 5.
// Third .then() prints the final result.

const firstChain = new Promise((resolve, reject) => {
    let val = 10;

    resolve(val);
    reject("Invalid !!");
});

firstChain
    .then((val) => {
        return val * 2;
    })
    .then((val) => {
        return val + 5;
    })
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err);
    });
