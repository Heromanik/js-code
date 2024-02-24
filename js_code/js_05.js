// primitive
// 7types :String, Number, Boolean, Null,Undefined,Symbol,BigInt

// js is dynamic or static? 
//dynamic, because in js dont need to mention datatypes name while declaring variable and
// its not check in complie time check in run time

const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2) //returns flase 
// so, here when we are using symbol datatypes thats should be always unique.
//like id and id2 are store  two same value but its not same, both are different.

const bigNumber=123456785455n // its represent bigInt datatype for big value

// reference type or Non primitive 
//Array,Objects,Functions

const arrayy=["manik","soureen","moya"] // its return object as type
let myobj={     //its return object as type
    name:"manik",
    age:25,
}
const myFunction=function(){ // its return function object as type 
    console.log("hello i am manik")
}
console.log(typeof myFunction);
console.log(typeof myobj);
console.log(typeof arrayy);
console.log(typeof id);// its return symbol as type

// ++++++++++++++  MEMORY  +++++++++++++++++++++++++++

//Stack(Primitive ), Heap(Non-Primitive)
let var1="manikmallick"
let var2=var1
var2="yoo"
console.log(var2)
console.log(var1);

let userOne={
    email:"manik@gmail.com",
    upi:"ma@ybl",
}
let userTwo=userOne
userTwo.email="mallick@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
