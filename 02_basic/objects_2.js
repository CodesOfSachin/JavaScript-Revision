//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sachin"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "sachin@google.com",
    fullName : {
        userFullName : {
            firstName : "Wincent",
            lastName : "Bari"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

//const obj3 = {obj1, obj2} // it will create objects inside object 
//const obj3 = Object.assign({}, obj1, obj2, obj4) // {} this is target and other are source to join object in one
const obj3 = {...obj1, ...obj2} // spread method is prefered to use
console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

//console.log(users[1].email);
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // entries prints keys and their values in a array 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this checks if the key or value available in object and return in boolean 
