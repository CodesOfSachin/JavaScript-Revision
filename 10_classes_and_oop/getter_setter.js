class Account{
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `sascder${this._password}asdvadsfdsa`.toUpperCase()
    }

    set password(value) {
        this._password = value;
    }
}

const acc1 = new Account("Sachin@google.com", "Sac123")
console.log(acc1.email);
console.log(acc1.password);