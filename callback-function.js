function makeUppercase(value){

    console.log(value.toUpperCase());
}

makeUppercase("ahmet");

function handleName(name,cb){
const fullName=`${name} Oğuz`
fullName.toUpperCase();
cb(fullName)

}
handleName('ahmet',makeUppercase)

handleName('susan',(value) => {
        console.log(value);
    })