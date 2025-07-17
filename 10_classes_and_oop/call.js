function SetUsername(username) {
    // Complex DB calls
    this.username = username;
}

function createUser(username, email, password) {
    // call used to hold reference with execution context(this)
    // call passes current execution context to another function
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const user = new createUser("Sachin", "123@google.com", "123");

console.log(user);