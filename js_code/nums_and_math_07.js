const score =400
const balance=new Number(100)
// console.log(balance);//[Number: 100]
// console.log(score);
// console.log(balance.toString().length); // toString is used to convert any variable into a string
// console.log(balance.toFixed(5));// 1=>1.0,2=>100.00,3=>100.000 so on

const num2=123.8496
// console.log(num2.toPrecision(4)); // its helps to precise the value when number previous digit is greater 5

const num3=1000000
// console.log(num3.toLocaleString());//1,000,000
// console.log(num3.toLocaleString('en-IN'));//10,00,000 FOR INDIANS



//************   Maths ************* *

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); // 4 use for negetive to positive value
// console.log(Math.round(4.6)); //5 its helps round off the value
// console.log(Math.ceil(4.2));// 5 its helps always upper value
// console.log(Math.floor(4.9));// 4 its helps always lower value 
// console.log(Math.min(4,9,5,6));
// console.log(Math.max(4,9,5,6));
console.log(Math.random()); // its generate 0 to 1 values
console.log((Math.random()*10)+1);// plus 1 used for values comes greater 1

const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min); // its generate 10 to 20 values


