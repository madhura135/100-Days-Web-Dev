// 1. Select the textbox
const textbox = document.getElementById("textArea"); //first we have grabbed text area

// 2. Select the place where we want to show the count
const output = document.getElementById("output"); //we selected the place where we want to show ouput

// 3. Listen for changes in the textbox
textbox.addEventListener("input", function () {
  // 4. Get the CURRENT text
  let currentText = textbox.value; //this will return characters present inside the textbox

  // 5. Count its characters
  let characterCount = currentText.length; //here we are counting the value

  // 6. Show the count on the webpage
  output.textContent = `Character Count: ${characterCount}`; // this is how we can show the result in the webpage
});
