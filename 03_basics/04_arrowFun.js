const user = {
    userName : "Sachin",
    age : 22,

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`); // this refers to current of global context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.userName = "Brago"
// user.welcomeMessage()

console.log(this); //in node enviroment global context is empty object but in browser global context is window 

// function raise() {
//     let userName = "Brago"
//     console.log(this) // shows current context of function
//     console.log(this.userName); // undefined 
// }

// raise()

// const raise = function () {
//     let userName = "Brago"
//     console.log(this) // shows current context of function
//     console.log(this.userName); // undefined 
// }

// raise()

// const raise = () => {
//     let userName = "Brago"
//     console.log(this) // this keyword doesn't work in arrow function and shows empty obj
//     console.log(this.userName); // undefined 
// }

// raise()

// ********************************** Arrow function and return *****************************
// 1st method to return values in arrow fun using return keyword in {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// 2nd method to return values in arrow fun without using return keyword and {}

// const addTwo = (num1, num2) =>  num1 + num2


// console.log(addTwo(3,4));

// 3rd method to return values in arrow fun without using return keyword in () most used in React.js

const addTwo = (num1, num2) =>  (num1 + num2)


console.log(addTwo(3,4));

// method to return object in arrow fun

const arrFun = () => ({userName: "Sachin"})

console.log(arrFun());

// for each loop 
const myArr = [2, 3, 5, 7,]

// myArr.forEach(function(element) {
//     console.log(element);
    
// })


// for each using arrow function or callback
myArr.forEach((element) => {
         console.log(element);   
     })