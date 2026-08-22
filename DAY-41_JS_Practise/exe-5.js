// 5. Higher-Order Function — Concept + Implementation
// Create a function called calculate that accepts:
// two numbers
// a function as the third argument
// The function should be able to perform addition, subtraction, or multiplication depending on the callback passed.
// calculate(10, 5, add)
// calculate(10, 5, subtract)
// calculate(10, 5, multiply)
// 15
// 5
// 50


function calculate(a, b, operation) {
    let result = operation(a, b);
    console.log(result);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

calculate(10, 5, add);       // 15
calculate(10, 5, subtract);  // 5
calculate(10, 5, multiply);  // 50;
// Why is calculate() a higher-order function?
//-->"Calculate is a higher-order function because it accepts another function as an argument and invokes that function."