const background = document.body;

const colorSet = ["red", "blue", "pink", "grey", "yellow"];
const changebtn = document.getElementById("btn1");

changebtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colorSet.length);
    background.style.backgroundColor = colorSet[randomIndex];
});