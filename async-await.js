const example= async()=>{
 return "Hello There";
}

//console.log(example);

async function somefunc(){
    const result=await example();
    console.log(result);
}

const users=[
    {id:1,name:'john'},
    {id:2,name:'susan'},
    {id:3,name:'anna'},
]

const articles=[
    {userId:1,articles:['one','two','three']},
    {userId:2,aricles:['four','five']},
    {userId:3,articles:['six','seven','eight']},
]

const getData =async()=>{
    try {
         const user=await getUser("john")
         const userarticles=await getArticles(user.id) 
         console.log(userarticles);  
    } catch (error) {
        console.log(error)
    }
  }


getData();

function getUser(name){
    return new Promise((resolve,reject) =>{
        const user =users.find((user)=>user.name===name)
       if (user){
           return resolve(user)
       }else
                {
           reject(`Theres no such person :${name}`)}
    
    })
}

function getArticles(userId){

return new Promise((resolve,reject)=>{
    const userArticles=articles.find((user)=>user.userId===userId
    )
    if (userArticles){
        return resolve(userArticles)
    }else{
        reject("wrong Id")
    }
    
})}




