const value = 2 
const promise =new Promise((resolve,reject)=>{
    
    const random= Math.floor(Math.random()*3)
    if (random===value){
        resolve("You guessed it right !");
    }else {
        reject("You are wrong !");
    }
})

promise.then((data)=>console.log(data)).catch((err)=>console.log(err));