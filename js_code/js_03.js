let score="33abc"
console.log(typeof score)

let score1="33"
console.log(typeof score1)
 
let valueInNumber=Number(score) //its always gives number if value is not a number
console.log(typeof valueInNumber)
let valueInNumber1=String(score)
console.log(typeof valueInNumber1)

/*
if we pass boolean value as a true/false its return 1/0
if we pass undefined as a value its return NAN
if we pass null as a value then its return 0

*/

let isLoggedIn="" //return false 
let isLoggedIn1=0; // return false 
let isLoggedIn2="manik" //return true
let isLoggedIn3=1 // return true
let booleanLoggedIn=Boolean (isLoggedIn2)
console.log(booleanLoggedIn) 
console.log(booleanLoggedIn)  
//1=true ,0=false
//"manik"=true, ""=false
 
// operations
let value =3
let negvalue=-value
console.log(negvalue)
let str1="hello"
let str2=" manik"
let str3=str1+str2
console.log(str3);
console.log(2+"1");
console.log("2"+1); 
console.log("1"+2+2)
console.log(1+ 1+"2");
console.log(true); //returns true
console.log(+true);// returns 1
//console.log(true+);// its give an error

let num=100
num++;
++num;
console.log(num);