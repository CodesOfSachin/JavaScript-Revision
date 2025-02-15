const name = "Sachin"
const repoCount = 20

//Concatinating string
// console.log(name + repoCount + " Value");

// Much efficient way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Winecent Bari');


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("c"));

const newString = gameName.substring(0, 8);
console.log(newString);

const anotherString = gameName.slice(-4, 13);
console.log(anotherString);

const newStrinOne = "      SACHIN       "
console.log(newStrinOne);
console.log(newStrinOne.trim());

const url = "https://sachin.com/sachin%wincent%bari"


console.log(url.replace("%", "-"));// this replace first matched % to - rest remain same;
console.log(url.replaceAll("%", "-"));// this replace all % to -;
console.log(url.includes('sachin')); // checks if keyword is available in string and return boolean value true or false

console.log(gameName.split(' '));