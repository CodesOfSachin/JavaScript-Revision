class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `123${this.password}bva`
    }

    Capusername() {
        return `${this.username.toUpperCase()}`;
    }
}

const user = new User("Sachin", "123@google.com", 123);
console.log(user.encryptPassword());
console.log(user.Capusername());

// behind the scene
// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `123${this.password}bva`;
// }

// User.prototype.CapUserName = function() {
//     return `${this.username.toUpperCase()}`;
// }

// const user = new User("Sachin", "123@google.com", 123);
// console.log(user.encryptPassword());
// console.log(user.CapUserName());