// Create a function checkLogin() that returns a Promise.

function checkLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLoggedIn === true) {
                resolve("Login successful");
            } else {
                reject("Login failed");
            }
        }, 2000);
    });
}

checkLogin()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})