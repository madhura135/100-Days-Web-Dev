fun = () => {
  let innerContent = document.getElementById("para");
  let btn = document.getElementById("btn");
  innerContent.innerText = "Okay !! You can start advanced concepts ";
  btn.style.backgroundColor = "green";
  console.log(innerContent);
};

const dice = document.getElementById('dice');
const audio=document.getElementById('diceAudio');

roll = () => {
  console.log("..rolling");
  const randomNum = Math.floor(Math.random() * 6) + 1;
  dice.innerText=randomNum;
    audio.play();
  dice.classList.add('spin'); //classlist help to add/remove the class
  setTimeout(function () {
    dice.classList.remove('spin');
  }, 2000);
};
