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
