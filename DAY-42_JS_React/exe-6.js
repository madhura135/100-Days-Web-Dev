function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "Madhura",
        role: "Frontend Developer",
      });
    }, 2000);
  });
}
fetchUser()
    .then((result)=>{
        console.log(result);
    })//already refers to success so whta we can add is a callback result object
    
