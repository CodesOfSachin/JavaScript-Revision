class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const user = new User("Sachin");
// console.log(user.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
} 

const teacher = new Teacher("Hitesh", "hitesh@google.com")
teacher.logMe();
// teacher.createId(); // will not work b'coz of static key word