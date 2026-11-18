let userArr = [];

const AddUser = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telnumber = document.getElementById("telnumber").value;

  let user = {
    name: name,
    email: email,
    telnumber: telnumber,
  };

    checkDuplicateUSer();
  userArr.push(user);

  // Trigger the display 1 second AFTER the user is added
  setTimeout(() => {
    showData(user);

    // Show the alert 1.5 seconds after the user appears on screen
    setTimeout(() => {
      alert("User added successfully !!");
    }, 1500);
  }, 1000);
};

function showData(user) {
  let right = document.getElementById("right");
  let div = document.createElement("div");
  div.classList.add("users-container");

  // Access properties from the single 'user' object
  const child1 = document.createElement("p");
  child1.textContent = user.name;

  const child2 = document.createElement("p");
  child2.textContent = user.email;

  const child3 = document.createElement("p");
  child3.textContent = user.telnumber;

  div.append(child1, child2, child3);
  right.appendChild(div);
}

 checkDuplicateUSer=(user.email.value)=>{
    if( userArr.includes.user.email.value){
        console.log("Same email exist with other account")
    }
   

 };
