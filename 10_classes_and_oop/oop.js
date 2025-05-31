const user = {
    username: "Sachin",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details from database');
        console.log(`Username: ${this.username}`);
        console.log(this); // here this will print user context
    }
}

console.log(user.username);
user.getUserDetails();
console.log(this); // here this will print node global context 
// in node global context there's nothing for now but maybe in future there will be
// in browser global context there's many methods or properties for example window, dom etc...
// keep in mind global context changes 

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

// below code will overWrite code 
// const userOne = User("Sachin", 5, true);
// const userTwo = User("Mihawk", 1, true);
// console.log(userOne)

// use new keyword or constructor for creating their own context or instance. that will prevent overWriting
const userOne = new User("Sachin", 5, true);
const userTwo = new User("Mihawk", 1, true);
console.log(userOne)
console.log(userTwo)

userOne.greeting()
userTwo.greeting()