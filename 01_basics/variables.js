const userId = 3241
let userEmail = "sachin@gmail.com"
var userPassword = "1235"
userCity = "London"
let userState; //it will print undefined

/*
    userId = 5342 // Not allowed due to const 
    Prefer not to use var 
    because of issue in block scope and functional scope
*/

console.log(userId, userEmail); // print userId and userEmail in single line
console.table([userId, userEmail, userPassword, userCity, userState]) // prints every mentioned variable in a table form

