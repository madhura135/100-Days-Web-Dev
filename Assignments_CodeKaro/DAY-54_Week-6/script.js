
const background=document.body;

let colorSet=["red","blue","pink","grey","yellow"];
let randomColor=Math.floor(Math.random()*colorSet.length);
 
changeColor=()=>{
       background.style.backgroundColor = colorSet[randomColor];
 }