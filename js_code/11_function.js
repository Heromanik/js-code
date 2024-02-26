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


