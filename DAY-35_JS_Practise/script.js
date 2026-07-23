// ======================================================
// 1. CONVERSION FUNCTIONS
// ======================================================
// These functions ONLY do calculations.
// They don't need to know anything about HTML,
// radio buttons, buttons, etc.

function CToF(temperature) {
  let result = temperature * (9 / 5) + 32;
  return result;
}

function FToC(temperature) {
  let result = (temperature - 32) * (5 / 9);
  return result;
}

// ======================================================
// 2. GET THE CONVERT BUTTON
// ======================================================

const convertBtn = document.getElementById("convert");

// ======================================================
// 3. LISTEN FOR USER CLICK
// ======================================================

convertBtn.addEventListener("click", function showOutput() {
  // --------------------------------------------------
  // STEP 1: Read the temperature entered by the user
  // --------------------------------------------------

  const grabInputField = document.getElementById("inputTemp");

  // .value returns a STRING.
  // Number() converts it into a number for calculation.
  const temperatureValueInput = Number(grabInputField.value);

  // --------------------------------------------------
  // STEP 2: Find which radio button user selected
  // --------------------------------------------------

  const selectedOption = document.querySelector('input[name="temp"]:checked');

  // --------------------------------------------------
  // STEP 3: Make sure user selected an option
  // --------------------------------------------------

  if (selectedOption) {
    // selectedOption is the radio HTML element.
    // selectedOption.value gives us "celsius" or "fahrenheit".

    console.log(selectedOption.value);

    // ------------------------------------------------
    // STEP 4: Decide which conversion function to call
    // ------------------------------------------------

    let result;

    if (selectedOption.value === "celsius") {
      // Call Celsius → Fahrenheit function
      result = CToF(temperatureValueInput);
    } else {
      // Call Fahrenheit → Celsius function
      result = FToC(temperatureValueInput);
    }

    // ------------------------------------------------
    // STEP 5: Display the returned result
    // ------------------------------------------------

    const outputField = document.getElementById("outputTemp");

    outputField.value = result;

    outputField.innerHTML = result;
  } else {
    // No radio button was selected
    console.log("Please select a conversion type");
  }
});
