//Closure is a bundle of function with its lexical scope.This allows a 
// function to access varibale from its outer environment even if the outer function is  executed.

function outerFunction() {
    let outerV=9;
    function innerFunction() {
        console.log(outerV);
    }
    return innerFunction;
}
const x= outerFunction();
x(); // This will log 9 to the console