// Stack (Primitive), Heap (Non-Primitive)
//Stack Memory
let myName = "Sachin";
let name = myName; // myName gives a copied value to name
name = "Brago"; // new value replaces copied value in name var and doesn't effect original in myName

console.log(myName); // Remain same as Sachin
console.log(name); // replaced copied value with new assigned name Brago

// Heap Memory
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne; // here it passes reference of original value 

userTwo.email = "Sachin@google.com"; // Since userTwo has reference of original value it will replace original Email 

console.log(userOne.email); // Sachin@google.com
console.log(userTwo.email); // Sachin@google.com
