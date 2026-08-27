// Exercise 4 — User → Orders → Payment
// You're going to simulate three API calls using Promises.
// Create getUser()
// It should return a Promise.
// After 1 second, resolve with:
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        id: 101,
        name: "Madhura",
      });
    }, 1000);
  });
}

function getOrders(userId) {
  setTimeout(function () {
    resolve;
  });
}
