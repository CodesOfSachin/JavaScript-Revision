// let myName = "Sachin      "
// let favCharac = "Sukuna     "

// console.log(myName.trueLength()); 

let myHeros = ["Thor", "SpiderMan"]

let heroPower = {
    thor: "Thunder",
    spiderMan: "Sling",

    getSpiderPower: function() {
        console.log(this.spiderMan);
    }
}

Object.prototype.sachin = function() {
    console.log("Present in all")
}

Array.prototype.heySachin = function() {
    console.log("Hello")
}

// heroPower.sachin();
// myHeros.sachin();
// myHeros.heySachin();
// heroPower.heySachin();

// Inheritance

const User = {
    name: "Sachin",
    email: "Sachin@google.com"
}

const Teacher = {
    makeVideo: false
}

const TeachinSupport = {
    isAvailable: false
}

// 1st method
const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__: TeachinSupport
}

// 2nd method
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachinSupport, Teacher)

let anotherUsername = "Mihawk       "

String.prototype.trueLength = function() {
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Sachin       ".trueLength();
"GOJO".trueLength();