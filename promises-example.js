

const btn=document.querySelector(".btn");

btn.addEventListener('click',()=>{
    addColor(1000,".first","red")
    .then(()=>addColor(2000,".second","blue")
    .then(()=>addColor(3000,".third","green")))
    .catch((err)=>console.log(err))
})


function addColor(time,selector,color){
   const element=document.querySelector(selector)

   return new Promise((resolve,reject)=>{
       if (element){
           setTimeout(()=>{
               element.style.color=color
              // this resolve below is the key object for to continue of the .then sequences !!!!
               resolve();
           },time)
       }else{
        reject(`Theres no such element: "${selector}"`)
       }
   })
}