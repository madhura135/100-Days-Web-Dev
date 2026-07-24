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
  // Get temperature input
  const grabInputField = document.getElementById("inputTemp");
  const temperatureValueInput = Number(grabInputField.value);

  // Find selected radio button
  const selectedOption = document.querySelector('input[name="temp"]:checked');

  // Check whether a radio button is selected
  if (selectedOption) {
    let result;

    // Celsius → Fahrenheit
    if (selectedOption.value === "celsius") {
      result = CToF(temperatureValueInput);
    }

    // Fahrenheit → Celsius
    else {
      result = FToC(temperatureValueInput);
    }

    // Get output field
    const outputField = document.getElementById("outputTemp");

    // Put result inside input field
    outputField.value = result;
  } else {
    console.log("Please select a conversion type");
  }
});
