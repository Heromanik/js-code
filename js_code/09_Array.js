const myArr=[0,1,2,3,4,5] // resizable,mix of datatypes 

// console.log(myArr[0]); // access the array elements using index

myArr.push(7) // add new value
// console.log(myArr);
myArr.pop()// delete last value of an array

myArr.unshift(9)
//[ // add new value an array 1st position  and shift all elements by 1 position
    9, 0, 1, 2,
    3, 4, 5
 // ]
 myArr.shift() //[ 0, 1, 2, 3, 4, 5 ] remove 1st value of an array 

// console.log(myArr);

// console.log(myArr.includes(9)); //false thats helps to check elements is present or not return true or false as boolean
// console.log(myArr.indexOf(3));// returns the index of values and if values are not present then return -1.

// const newArr=myArr.join() // its convert array to string 
// console.log(newArr); //RETURNS 0,1,2,3,4,5
// console.log(typeof newArr);


//SLICE , SPLICE

console.log("A",myArr);

const myn1=myArr.slice(0,4)//[ 0, 1, 2, 3 ]
console.log(myn1);

console.log("B",myArr);

const myn2=myArr.splice(1,3)// [ 0, 4, 5 ] remove 1,2,3 position values
console.log("C",myArr);//C [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ] also main array is changed after splice method only print non remove elements in splice method
