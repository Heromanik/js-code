var b=300
let a=400 // global scope and global scope is different in console and node
if(true){
let a=10 // this let variable cannot access outside the if scope
var b=20 // can access outside the if scope
const c=30 //// this const variable cannot access outside the if scope
}

//console.log(a); // error
//console.log(c); //error
//console.log(b); //not an error 30

//closure -> nested function child function is access the parent object but not vice versa
function one() {
    const username="manik"
    function two() {
        const website="youtube"
       // console.log(username);
        
    }
   // console.log(website); // can't access website outside the function scope

    two()
    
}
one()

if (true) { // parent if

    const username="manik"
        if(username==="manik") // child if , it can access 'username' under parent if 
        {
            const website=" youtube"
          //  console.log(username + website);
        }
    //console.log(website);
}


//*************interesting  ******************/

// one type to declare a function
function addone (num) {
    return num+1
}
addone(5) // it also used before function declare

// 2nd type to declare a function using a variable


//addTwo(5) // give an error
const addTwo=function (num) {
    return num+2
}
addTwo(5) // it cant declare before function declare


// *********** arrow functions & this keyword *************

const user={
    username:"manik",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);// this keyword is refer current context
        //manik , welcome to website
        console.log(this);
        /* {
  username: 'manik',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */
    }
}

// user.welcomeMessage()
// user.username="soureen"
// user.welcomeMessage()
/* soureen , welcome to website
{
  username: 'soureen',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */


//console.log(this);//{} returns a empty object but when we print this on browser its return a window object


// function chai() {
//     let username="manik"
//     console.log(this.username);// returns undefined because this.variables name is only use in object not into the function
// }
// chai() 


// arrow function

const chai =() =>{
    let username="manik"
    console.log(this.username); // same output as normal function gives
}
//chai()


// const addTwoNumber=(num1,num2)=>{
//  return num1+num2
// }

//const addTwoNumber=(num1,num2)=> num1 + num2 // for single line dont need to return keyword and curly braces
//const addTwoNumber=(num1,num2)=> (num1 + num2) 
const addTwoNumber=(num1,num2)=> ({username:"manik"}) // for object used ()

console.log(addTwoNumber(3,5));
