const myArr = [0, 1, 2, 3, 4, 5]
const myFav = ["Brago", "Bari"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


// Some Basic Array method
myArr.push(6) // add element at end of array
myArr.push(7)
myArr.pop() // remove element at end of array
console.log(myArr);

myArr.unshift(9); // add element at index 0 of array or at first 
myArr.shift(); // remove element at index 0 of array or removes first element of array

console.log(myArr.includes(9)); // checks element in array and return true or false
console.log(myArr.indexOf(3)); // checks element in array by given position and return value of given index  

const newArr = myArr.join() // join element of array and return values in string format


console.log(myArr);
console.log(newArr);

// Slice and Splice method
console.log("A ", myArr);
const myn1 = myArr.slice(0, 3); // it will give 0 to 2 element in myn1 but it won't effect original array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // splice removes values from original array and removed value will be saved in myn2
console.log(myn2);
console.log("C ", myArr);