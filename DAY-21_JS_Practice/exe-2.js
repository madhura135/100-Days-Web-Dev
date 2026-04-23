// 35. Check Character Between 2nd and 4th Positions in String
// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

let str;
let speciChar;
function checkSpeciCharExists(str, speciChar) {
  if (str.length < 2) {
    console.log("String length is too short" + str);
  } else if (str.length > 3) {
    let secondPosition = str.substring(2);
    console.log("2nd position have: " + secondPosition);
    if (secondPosition === speciChar) {
      console.log(speciChar + " exists in string " + str);
    } else {
      console.log(speciChar + " not exists in " + str);
    }
  } else {
    let twoToFour = str.substring(2, 4);
    console.log("2 to 4 position have : " + twoToFour);
    if (twoToFour === speciChar) {
      console.log(speciChar + " exists in string " + str);
    } else {
      console.log(speciChar + " not exists in " + str);
    }
  }
}
console.log(checkSpeciCharExists("Madhura", "i")); //negative Eyes 0,1,2,3 length=4
console.log(checkSpeciCharExists("Jenny", "n")); //positive
console.log(checkSpeciCharExists("eye", "y")); //positive
console.log(checkSpeciCharExists("is", "t")); //negative
