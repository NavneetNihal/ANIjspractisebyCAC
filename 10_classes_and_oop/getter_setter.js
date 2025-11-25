class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password(){
        return `${this._password}Nihalehwgifbn8237t6r`
    }

    set password(value){
        this._password = value
    }
}

const nihal = new user ("nihal@gmail.com", "abc")
console.log(nihal.email);
console.log(nihal.password);
