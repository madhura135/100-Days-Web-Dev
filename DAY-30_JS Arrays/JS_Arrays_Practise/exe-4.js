/*slice and splice methods */

let num = [34, 67, 12, 87, 345, 9866];
//splice add new elements in any array and removes elements from given index
num.splice(0, 2, "yes1", "yes2", "s3"); //
console.log(num);
let result = num.slice(2, 3);
console.log(result);
//A simple memory trick:

// splice = knife ✂️ → cuts the original array.
// slice = photocopy 📄 → creates a copy and leaves the original untouched.
