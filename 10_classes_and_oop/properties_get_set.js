function Account(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toLowerCase()
        },
        set: function(value) {
            this._email = value
        } 
    })

    Object.defineProperty(this, "password", {
        get: function() {
            return `sascder${this._password}asdvadsfdsa`.toUpperCase()
        },
        set: function(value) {
            this._password = value
        } 
    })
}

const acc1 = new Account("Sachin@google.com", "Sac123")
console.log(acc1.email);
console.log(acc1.password);