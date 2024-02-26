var b=300
let a=400 // global scope and global scope is different in console and node
if(true){
let a=10 // this let variable cannot access outside the if scope
var b=20 // can access outside the if scope
const c=30 //// this const variable cannot access outside the if scope
}

//console.log(a); // error
//console.log(c); //error
console.log(b); //not an error 30