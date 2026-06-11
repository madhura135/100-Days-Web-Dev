/*Push tricky 
Tricky
Given:
let skills = ["HTML", "CSS"];
Requirements:
Add "JavaScript"
Store the return value of push() in a variable called totalSkills
Print:
Total Skills: 3 Print the final array  
Output will be:  
Total Skills: 3
["HTML", "CSS", "JavaScript"] */

let skills = ["HTML", "CSS"]; //OG array
let totalSkills = skills.push("JavaScript"); //this added 3rd element in skilss array and push also return array length after adding
console.log("Total Skills: " + totalSkills); //will have return value that is length of the array
console.log(skills); //this will be modified array
