const name="manik"
const age=25
console.log("my name is "+name + " and my age is "+ age );//method 1
console.log(`my name is ${name} and my age is ${age}`);// method 2 
//that is called string interpolation using '`' backthick and dollar sign
const gameChange=new String ('manikkkk') // another way to decalre a string but here we can access all keys
console.log(gameChange[0]); // its return 'm' thats the first char of 'manikkk'
console.log(gameChange.length);//its return 8 
console.log(gameChange.toUpperCase());
console.log(gameChange.charAt(2)); // returns 'n'
console.log(gameChange.indexOf('i'));


const newString =gameChange.substring(0,4)
console.log(newString);

const newString2 =gameChange.slice(-8,4)
console.log(newString2);

const newString3 ="   manik   "
console.log(newString3);
console.log(newString3.trim());






