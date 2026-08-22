// 6. setTimeout — Trust Issues
// Without running the code, predict the output order and explain why:

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Your answer should explain why setTimeout(..., 0) does not mean "execute immediately."
//setTimeout((),0) is basically use to differ something, output will be A,C and then B
