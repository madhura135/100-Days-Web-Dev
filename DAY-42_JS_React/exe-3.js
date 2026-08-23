// Promise Exercise 2 — setTimeout
// Create a function getData() that returns a Promise.
// Requirements:
// Use setTimeout() inside the Promise.
// Wait 2 seconds.
// If success is true, call resolve("Data received successfully").
// If success is false, call reject("Failed to fetch data").
// Consume the Promise using .then() and .catch().

const success=true;
// const success=false;
const getData= new Promise((resolve,reject)=>{
    console.log("hello world no waiting ")
    setTimeout(function(){
        if(success){
        resolve("Data received successfully")
    }
    else{
        reject("Failed to fetch data")
    }
    },2000)
    
});

getData
.then((res)=>console.log(res))
.catch((err)=>console.log(err));
