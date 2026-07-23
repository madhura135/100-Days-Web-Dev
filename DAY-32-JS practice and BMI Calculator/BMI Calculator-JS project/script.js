let takeOptionSelected = document.body.querySelectorAll('[name="option"]'); //atrribute selector

//function which takes click and form chnages with the user selection
takeOptionSelected.forEach((value) => {
  value.addEventListener("click", () => {
    if (value == "radioKgCm") {
      let selectPlaceholderWeight = document.body.getElementById(weight);

      let changePlaceholderW = selectPlaceholderWeight.getAttribute(
        '[placeholder="Weight in kg"]',
      );

      changePlaceholderW.setAttribute("placeholder", "Enter your weight in kg");

      let selectPlaceholderHeight = document.body.getElementById(height);
      let changePlaceholderH = selectPlaceholderHeight.getAttribute(
        '[placeholder="Height in cm"]',
      );

      changePlaceholderW.setAttribute("placeholder", "Enter your height in cm");
    } else {
      let selectPlaceholderHeight = document.body.getElementById(height);
      console.log(selectPlaceholderHeight);
    }
  });
});
//function inside that for calculation KgCm BMI and LbsFt BMI

const radioOptions = document.querySelectorAll('[name="option"]');

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

radioOptions.forEach((radio) => {
  radio.addEventListener("change", () => {
    console.log(radio.value);
  });
});
