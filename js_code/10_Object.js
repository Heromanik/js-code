//singleton object -> by constructor not using literals
// object.create



//object literals

const mySym= Symbol("key1")

const JsUser={
    name:"manik", // here name as treat as a string like "name"
    "Full Name":"manik mallick",
    [mySym]:"mykey1",
    age:25,
    location:"kolkata",
    email:"manik@google.com",
    isLogIn:false,
    lastLoginDays:["monday","sunday"]
}

// console.log(JsUser.email); // its is not practice because when we decalare any variable in string format is not working

// console.log(JsUser["email"]);
// //console.log(JsUser.Full Name); its give an error
// console.log(JsUser["Full Name"]);

// console.log(JsUser[mySym]); // treat as sysmbol
// console.log(typeof mySym);


JsUser.age=24 // use for modify values
//Object.freeze(JsUser) // after that we are not modify any value in an object
JsUser.age=23 // its not working 
// console.log(JsUser);


JsUser.greeting1=function(){
    console.log("hello js user");
}

JsUser.greeting2=function(){
    console.log(`hello js user , ${this.name}`);
}

// console.log(JsUser.greeting1());
// console.log(JsUser.greeting2());

//************ object singleton**************/

//const tinderUser= new Object()

const tinderUser={}

tinderUser.id="12345"
tinderUser.name="manik"
tinderUser.isLogIn=false

//console.log(tinderUser);

const regularUser={
    email:"manik@gmail.com",
    fullname:{
        userfullname:{
            firstname:"manik",
            lastname:"mallick"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);// print manik
// console.log(regularUser.fullname.userfullname); // print { firstname: 'manik', lastname: 'mallick' }

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}
/*{
    obj1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' },
  obj2: { '3': 'c', '4': 'd' }
  }*/
const obj4=Object.assign(obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj3);
//console.log(obj4);