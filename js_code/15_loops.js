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
    console.log(item.languagename);
 })

 /**
  js
java
c++
  */