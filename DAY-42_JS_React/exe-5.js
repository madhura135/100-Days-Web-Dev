// Handling Promise Rejection:

// 3. Write a JavaScript program that demonstrates how to catch and handle errors in Promises using .catch().
let data= true;
const getData= new Promise((resolve,reject)=>{

    
    if(data==true){
        resolve("Success !! ");
    }
    else{
        reject("Failure !!");
    }
})

// .then(callback)
// .catch(callback)
getData
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });