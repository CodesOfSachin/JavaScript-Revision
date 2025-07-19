const Account = {
    _email: "Sachin@google.com",
    _password: "Sac123",

    set email(value) {
        this._email = value;
    },

    get email() {
        return this._email.toLowerCase();
    },

    set password(value) {
        this._password = value;
    },

    get password() {
        return `sascder${this._password}asdvadsfdsa`.toUpperCase();
    },
}

const acc1 = Object.create(Account);
console.log(acc1.email);
console.log(acc1.password);