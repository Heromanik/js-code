console.log("2">1)
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null<0);
console.log(null>=0);// true
// because the reason is that an equality check == and comparisons > <>= <= work  differently .
// comparisons convert null to a number, treating it as 0.
// that's why null>=0 is true and others is false.

// === its used to compare values as well  as datatypes
console.log(2==="2");// return false
console.log(2=="2"); // return true