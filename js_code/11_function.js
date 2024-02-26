function sayMyName() {
    console.log("manik");
    console.log("mallick");
    
}
// sayMyName()
function addTwoNumbers(number1,number2) { // num1 and num2 as a parameter
    console.log(number1+number2)
}
addTwoNumbers(3,4)// 3,4 -> arguments


function addTwoNumbers(number1,number2) { 
    // let result=number1+number2
    // console.log("manik")
    // console.log(number1+number2)
    // return result
    return number1+number2
    console.log("manik") //Unreachable code detected  code after return not executed
}
const result=addTwoNumbers(3,5)

//console.log("Result:",result);


function loginUserMessage(username="manik") {
        if(username===undefined){
            console.log("please enter a username");
            return
        }
    return `${username} just logged in`
    
}
//console.log(loginUserMessage("manik")); //manik just logged in
//console.log(loginUserMessage("")); //just logged in
//console.log(loginUserMessage()); //undefined just logged in


//shoping card

function calculateCardPrice(...num1) { //...-> rest operator or spread operator
    return num1
}
console.log(calculateCardPrice(200,300,400)); //[ 200, 300, 400 ]

function calculateCardPrice1(val1,val2,...num2) { //...-> rest operator or spread operator
    return num2
}
console.log(calculateCardPrice1(200,300,400,2000));//[ 400, 2000 ]

const user={
    username:"manik",
    price:199
}
function handleObject(anyobjects) {
    console.log(`Username is ${anyobjects.username} and Price is ${anyobjects.price}`);
}
//handleObject(user) //Username is manik and Price is 199

handleObject({  //Username is manik and Price is 399
username:"manik",
price:399
})


const myNewArray=[200,400,100,600]

function returnSecondValue(getArray) {

    return getArray[2]
    
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));

