//for loop

// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);      
//     }
    
// }

// let myarray=["manik","soureen","moya"]
// for (let i = 0; i < myarray.length; i++) {
//     const element = myarray[i];
//     console.log(element);
    
// }
//break , continue

//while,dowhile

// let i=1
// while (i<10) {
//     console.log(i);
//     i+=2;
// }

// let score=11

// do {
// console.log(score);
// score++;

// } while (score<=10);



// for of loop

//["","",""]
//[{},{},{}]

// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }


//Maps uses for unique value 

const map=new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('SI',"Srilanka")
map.set('IN',"India")
map.set('FR',"France")

//Map(3) { 'IN' => 'India', 'FR' => 'France', 'SI' => 'Srilanka' }

//console.log(map);

for (const [key, value] of map) {
    //console.log(key,':-',value);
/*  IN :- India
    FR :- France
    SI :- Srilanka */
}

const myObject={
    'game1':'cricket',
    'game2':'football'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value); // throws an error 'myObject is not iterable'
// }

// for in loop
const myobj={
    js:"javascript",
    cpp:"c++",
    ML:"pythond"
}

for (const key in myobj) {
    //console.log(`${key} :-  ${myobj[key]}`);
}

const programming=["js","rb","py"]

for (const key in programming) {
    //console.log(programming[key]);
}

/*js
  rb
  py*/

  // for each loop
  

  const coding=["js","ruby","python","java","c++"]

//   coding.forEach(function (item) {
//     console.log(item);
//   })
    /** js
ruby
python
java
c++ */


coding.forEach((item) =>{
   // console.log(item); // same

})

function printme(item) {
    //console.log(item);
    
}
coding.forEach(printme)

coding.forEach((item,index,arr) =>{
   // console.log(item,` `,index,`  `,arr); 
 /**
  
 js 0 [ 'js', 'ruby', 'python', 'java', 'c++' ]
ruby 1 [ 'js', 'ruby', 'python', 'java', 'c++' ]
python 2 [ 'js', 'ruby', 'python', 'java', 'c++' ]
java 3 [ 'js', 'ruby', 'python', 'java', 'c++' ]
c++ 4 [ 'js', 'ruby', 'python', 'java', 'c++' ]
  */
 })



 const mycoding=[

    {
        languagename:"js"
    },
    {
        languagename:"java"
    },
    {
        languagename:"c++"
    },
 ]

 mycoding.forEach((item)=>{
    //console.log(item.languagename);
 })

 /**
  js
java
c++
  */

// const values=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values); // return undefined because forEach loop dont return anything


//filter
const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.filter((num) => num>4 )

// const newNums=myNums.filter((num) => {
//     return num>4     //use return keyword when we are use {}
// })

const newNums=[]

// myNums.forEach((num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
// })


// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]



const books=[

{title:'b1',genre:'fiction',publish:1981},
{title:'b2',genre:'non-fiction',publish:2011},
{title:'b3',genre:'history',publish:1981},
{title:'b4',genre:'comedy',publish:2001},
{title:'b5',genre:'history',publish:1981}
];

//const userbooks=books.filter((bk) => bk.genre==='history')

//const userbooks=books.filter((bk) => bk.publish>=2000)

const userbooks=books.filter((bk) => bk.publish>=2000 && bk.publish<=2005)


//console.log(userbooks);
/*[
    { title: 'b3', genre: 'history', publish: 1981 },
    { title: 'b5', genre: 'history', publish: 1981 }
  ]

  [
  { title: 'b2', genre: 'non-fiction', publish: 2011 },
  { title: 'b4', genre: 'comedy', publish: 2001 }
]
  */

//chaining -> when we are using multiple methods same time

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNumbers
                .map((num ) => num*10)
                .map((num) =>num+1)
                .map((num) =>num+1)
                .filter((num)=> num>40)
 //console.log(newNum);


 /**
  
 [
  12, 22, 32, 42,  52,
  62, 72, 82, 92, 102
]

[
  42, 52,  62, 72,
  82, 92, 102
]
  */

//reduce

const NUM1=[1,2,3]

// const myTotal= NUM1.reduce(function (acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+curval
// },0)

const myTotal=NUM1.reduce((acc,curval) => acc+curval,0)
console.log(myTotal);
/**
acc: 0 and curval: 1
acc: 1 and curval: 2
acc: 3 and curval: 3
6
 */
const shoppingCart=[

    {
        itemname:"js",
        price:2999
    },

    {
        itemname:"python",
        price:5999
    },
    {
        itemname:"mobile dev",
        price:9999
    },



]


const priceToPay= shoppingCart.reduce((acc,item) => acc+item.price,0)

console.log(priceToPay);
