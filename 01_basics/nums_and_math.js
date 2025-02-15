const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++ MATHS *******************************************

console.log(Math); 
console.log(Math.abs(-4)); // gives positive value
console.log(Math.round(4.6)); // round decimal number to closest proper number (5)
console.log(Math.ceil(4.2)); // round decimal number to bigger integer number (5)
console.log(Math.floor(4.8)); // round decimal number to smaller integer number (4)
console.log(Math.min(4, 2, 4, 8, 9)); // finds smallest number in given values (2)
console.log(Math.max(4, 2, 4, 8, 9)); // finds largest number in given values (9)

console.log(Math.random()); //Math.random gives value between 0 and 1
console.log((Math.random() * 10) + 1); // formula to get number 1 to 10
console.log(Math.floor(((Math.random() * 10) + 1))); // formula to get number 1 to 9 without decimal 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // formula to get number between 10 to 20
