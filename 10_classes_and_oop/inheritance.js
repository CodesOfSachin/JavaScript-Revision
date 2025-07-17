class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`Course added by ${this.username}`);
    }
}

const teacher = new Teacher("Hitesh", "hitesh@google.com", "123");

teacher.addCourse();
teacher.logMe();

const user = new User("Sachin", "Sachin@google.com", "123")
user.logMe();

console.log(teacher === Teacher);
console.log(teacher === user);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
