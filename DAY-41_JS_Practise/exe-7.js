// 7. setTimeout — Trust Issues
// What will this print?

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

const start = Date.now();

while (Date.now() - start < 3000) {
  // blocking the main thread
}
console.log("End");
// Don't just give the output. Explain why the timer doesn't execute after exactly 1 second.
// output : Start
//         End
//         Timeout , bcz while is blocking the main thread, timer gets expire and event loop waits to push callback in callstack
