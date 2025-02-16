// singleton // objects created with constructor are singleton 
// Object.create // this is method of creating singleton object will see it later

// objects created with literals are not singleton 

const mySym = Symbol("Key1")


const jsUser = {
    name : "Sachin",
    [mySym]: "myKey1",
    age : 22,
    location : "Delhi",
    email : "Sachin@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// method of accessing object properties and values
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// overwriting values
// jsUser.email = "sachin@gpt.com"
// console.log(jsUser.email)
// locking values or freezing values to stop modification in objects
// Object.freeze(jsUser);
// jsUser.email = "Brago@gpt.com"
// Object.freeze(jsUser);
//console.log(jsUser);

jsUser.greetingTwo = function() {
    return `Hello JS user, ${this.name}`;
};

console.log(jsUser.greetingTwo());

