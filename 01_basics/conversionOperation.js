// let score = "33"
// let name = "sachin"

// console.log(typeof score);
// console.log(typeof name);

// let valueInNumber_01 = Number(score)
// let valueInNumber = Number(name)
// console.log(typeof valueInNumber_01);
// console.log(valueInNumber_01);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// // "33" => 33
// // "sachin" => NaN
// // true => 1; false => 0

// let isLoggenIn = "sachin"

// let booleanIsLoggedIn = Boolean(isLoggenIn)
// console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "sachin" => true

// let someNumber = 33
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ****************************************** Operations ********************************************

let value = 3 
let negValue = -value
// console.log(negValue);

// console.log(2+2); // additon
// console.log(2-2); // substraction
// console.log(2*2); // multiplication
// console.log(2**3);// power 
// console.log(2/3); // divide
// console.log(2%3); // modulus

let str1 = "Hello"
let str2 = "Sachin"

let str3 = str1 + str2
console.log(str3); // Hello Sachin

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // converts to 1 but prefer not to use this conversion
console.log(+""); // converts to 0 but prefer not to use this conversion

let num1, num2, num3

num1 = num2 = num3 = 2 + 2; //don't use this method to assign values due to very poor readablity

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101

// postFix increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

//preFix increment
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"