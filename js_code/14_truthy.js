// const email="manik@gmail.com"

// if(email){ // here check email is present or not 
//     console.log("got user email"); //executed
// }else{
//     console.log("dont have user email");
// }

// const email=""// mail is not present 

// if(email){ // here check email is present or not 
//     console.log("got user email"); 
// }else{
//     console.log("dont have user email");//executed
// }
const email=[]// mail as array 

if(email){ // here check email is present or not 
    console.log("got user email"); //executed
}else{
    console.log("dont have user email");
}


// falsy value

// false, 0,-0,BigInt 0n,"",null,undefined,NaN

//TRUTHY VALUE

//"0",'false'," space ",[],{},function(){}

if(email.length===0){
    console.log("array is empty");
}

const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

console.log(false==0);//true

console.log(false=='');//true

console.log(0=='');//true


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10 //5
// val1=null??10 //10
// val1=undefined??10 //10
// val1=undefined??10 ??15 //10


// console.log(val1);

//Terniary Operator


//condition ? true :false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") :console.log("more than 80");
//more than 80