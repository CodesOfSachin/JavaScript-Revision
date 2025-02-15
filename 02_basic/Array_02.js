const myHeroes = ["Brago", "Bari", "Goku"]
const frdHeroes = ["shaktimaan", "Joy", "Gojo"]

// myHeroes.push(frdHeroes); // this will add whole array in myHeroes which isn't good
let newArray = myHeroes.concat(frdHeroes); // concat gives new array without effection original
// but concat is old method now 
// spread method is easier method to join arrays in one
let heroes = [...myHeroes, ...frdHeroes] // spread method spread all element and joins in one

console.log(myHeroes);
console.log(newArray);
console.log(heroes);


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // very confusing right?
// we can flat this array or in simple word we can make it in one array with flat method
// in flat method it needs an argument how much depth we need to flat array like 1 or 2 
// but if we don't know how much nested arrays are there in an array we can use infinity 
// but using infinity not good practice make sure to use exact depth but here we will use infinity
const real_another_array = anotherArr.flat(Infinity) 
console.log(real_another_array);

console.log(Array.isArray("Sachin")); // checks if passed argument is array or not and return true or false
console.log(Array.from("Sachin")); // convert passed argument into array
console.log(Array.from({name: "Sachin"})); // important // it can't convert it directly into array so it will print empty array it can only create array of keys or value will see it later properly

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates a array 
