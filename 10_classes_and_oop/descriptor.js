const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);
Math.PI = 3;
console.log(Math.PI) // Math library is constand and can't be modified

const user = {
    name: "Sachin",
    age: 22,
    occupation: "Student",

    mind: function() {
        console.log("Running");
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));


// making name property non writable and enumerable(non itratable) 
Object.defineProperty(user, "name", {
    writable: false,
    enumerable: false
})

for (const [key, value] of Object.entries(user)) {
    if(typeof value !== "function") {
        console.log(`${key} : ${value}`)
    }
}