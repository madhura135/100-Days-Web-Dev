// CreateBox=()=>{
//     let boxContainer=document.getElementById('right')
//     let box=document.createElement('div');
//     boxContainer.appendChild('box');
//     boxContainer.classList.add(box);
// }
const CreateBox = () => {
  let boxContainer = document.getElementById("right");
  let box = document.createElement("div");

  box.classList.add("box");
  boxContainer.appendChild(box);

    if (boxContainer.scrollHeight > boxContainer.clientHeight) {
    boxContainer.removeChild(box);
    alert("Container is full!");
  }
};
