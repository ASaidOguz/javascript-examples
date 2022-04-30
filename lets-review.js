function processData(input) {
    //Enter your code here
    let i=0;
    let k=0;
    let oddarray =[]
    let evenarray=[]
    let splitArray=[""];
    const myArray=input.split("\n");
    
    let num=Number(myArray[0]);
    
    
    
    for(i=1;i<=num;i++){
        splitArray=myArray[i].split("");
        let l=splitArray.length-1
         //console.log(splitArray); 
         for(k=0;k<=l;k++){
             if(k%2==0){
                 evenarray.push(splitArray[k]);
             }else {
                 oddarray.push(splitArray[k]);
             }
         }          
        
        console.log(evenarray.join().replace(/,/g,""),oddarray.join().replace(/,/g,""));
        evenarray.splice(0, evenarray.length);
        oddarray.splice(0, oddarray.length);
        
    }
    
    //console.log(oddarray);
    //console.log(evenarray);
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
