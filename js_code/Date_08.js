let myDate=new Date()
console.log(myDate);//2024-02-24T14:21:38.476Z
console.log(myDate.toString());//Sat Feb 24 2024 14:21:38 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sat Feb 24 2024
console.log(myDate.toISOString());//2024-02-24T14:21:38.476Z
console.log(myDate.toJSON());//2024-02-24T14:21:38.476Z
console.log(myDate.toLocaleDateString());//2/24/2024
console.log(typeof myDate);// object

let newdate=new Date(2024,2,23) // months start from 0 i.e 0=jan,1 =feb, 2=march
console.log(newdate.toDateString());//Sat Mar 23 2024 

let myTimestamp=Date.now()

console.log(myTimestamp);
console.log(newdate.getTime());