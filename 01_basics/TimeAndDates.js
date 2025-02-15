// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2025, 1, 15)
// console.log(myCreateDate.toDateString());
// let myCreateDate = new Date(2025, 1, 15, 18, 18)
// let myCreateDate = new Date("2025-02-15") 
let myCreateDate = new Date("02-15-2025") 
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`${newDate.toLocaleString()} time `);
 
newDate.toLocaleString('default', {
    weekday: "long"
})