 //if statement

//  if (true) {
//     console.log("i am here");
//  } else {
//     console.log("hii");
//  }


 const balance=1000

 //if(balance>500) console.log("test"); // for single line
//  if(balance>500) console.log("test"), // dont used that way
//  console.log("test2");



if(balance<500){
console.log("less 500");
}else if(balance<750){
    console.log("less 750");
}else {
    console.log("less 1200");
}


const userLoggedIn=true
const debitcard=true

if (userLoggedIn && debitcard) {
    console.log("allow to buy course");
} else {
    console.log("not buy a course");
}
// also used or operation ||


//********switch case used in redux */

//syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month="jan"

switch (month) {
    case 1:    
        console.log("jan");        
        break;// if break is not working then print all case except default
    case "jan":
        console.log("feb");        
        break;
    case 3:   
        console.log("march");        
        break;
    default:
        console.log("april");
        break;
}
