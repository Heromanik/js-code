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

// console.log("A",myArr);

// const myn1=myArr.slice(0,4)//[ 0, 1, 2, 3 ]
// console.log(myn1);

// console.log("B",myArr);

// const myn2=myArr.splice(1,3)// [ 0, 4, 5 ] remove 1,2,3 position values
// console.log("C",myArr);//C [ 0, 4, 5 ]
// console.log(myn2); // [ 1, 2, 3 ] also main array is changed after splice method only print non remove elements in splice method

const hero1=["thor", "Ironman","Spiderman"]
const hero2=["superman","flash","batman"]

// hero1.push(hero2) // here hero2 array push into as a array and hero1 array index increases by 1.
// console.log(hero1); // return [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(hero1[3]); //[ 'superman', 'flash', 'batman' ]

// we can use concat for merging two array into a new array.

const allhero=hero1.concat(hero2) //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
// console.log(allhero);

// another way using spread operator.

const allnewhero=[...hero1,...hero2]
// console.log(allnewhero); //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ], no limitations

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity) //using infinity its flat in last depth
console.log(real_another_array);
//1=>[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
//2=>[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
//]



console.log(Array.isArray("manik"));
console.log(Array.from("manik"));// from -> Creates an array from an array-like object.
console.log(Array.from({name:"manik"})); //interesting

let score1=100

let score2 






