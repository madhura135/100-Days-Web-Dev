let userArr = [];

const checkDuplicateUSer = (userArr, newUser) => {
  let isDuplicate = false;

  for (let i = 0; i < userArr.length; i++) {
    if (
      userArr[i].email === newUser.email ||
      userArr[i].telnumber === newUser.telnumber
    ) {
      isDuplicate = true;
      break;
    }
  }

  let div = document.createElement("div");
  let popUpContainer = document.querySelector(".pop-up-container");
  popUpContainer.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 1000);

  if (isDuplicate) {
    console.log("Same email or number exist with other account");
    div.textContent = "Same email or number exists";
    div.classList.add("danger");
    return true;
  } else {
    div.textContent = "User added successfully !!";
    div.classList.add("success");
    return false;
  }
};

const AddUser = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telnumber = document.getElementById("telnumber").value;

  let user = {
    name: name,
    email: email,
    telnumber: telnumber,
  };

  if (checkDuplicateUSer(userArr, user)) {
    return;
  }

  userArr[userArr.length] = user;

  // Trigger the display 1 second AFTER the user is added
  setTimeout(() => {
    showData(user);
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
