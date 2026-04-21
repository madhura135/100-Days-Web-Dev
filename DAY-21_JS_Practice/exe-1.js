// 30. Remove 'Script' from String at 5th Position
// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
//  If "Script" appears in the string, 
// return the string without "Script" otherwise return the original one.

function checkStr(str) {

  // ✅ Case 1: If string length is less than 6
  // (Because "Script" itself has 6 characters)
  if (str.length < 6) {
    return 'Short string, no 5th position: ' + str;
  }

  // ✅ Extract characters from index 4 to 9 (end is excluded)
  // This checks if "Script" starts at index 4
  let extracted = str.substring(4, 10);

  // ✅ Case 2: If "Script" is found at index 4
  if (extracted === 'Script') {

    // Remove "Script" by combining:
    // part before index 4 + part after index 10
    let result = str.substring(0, 4) + str.substring(10);

    return 'Removed Script: ' + result;
  }

  // ✅ Case 3: If "Script" not found at position 4
  return 'No Script at 5th position: ' + str;
}
console.log(checkStr('Love'));        // too short
console.log(checkStr('string'));      // no match
console.log(checkStr('EcmaScriptMaterialAdd'));  // match + removed