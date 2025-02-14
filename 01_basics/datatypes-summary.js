// Premitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 4356739542934324545n

// Reference Non-Primitive Datatypes
// Array, Objects, Functions

const characters = ["Sukuna", "Bari", "Brago"]
let myObj = {
    name : "Sachin",
    age : 21
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof characters);
console.log(typeof myFunction);
console.log(typeof id);