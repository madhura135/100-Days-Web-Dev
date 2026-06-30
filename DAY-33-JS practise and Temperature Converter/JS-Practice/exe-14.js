//Create an element with 3 children. Now change the color of first and last element to green.-->

let div = document.getElementsByTagName("div")[0];

div.firstElementChild.style.color = "green";
div.lastElementChild.style.color = "red";
