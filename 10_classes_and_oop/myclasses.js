// ES6 

// class user {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("Nihal", "bsdk@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scene

function user1(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

user1.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
user1.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new user1("Nihal", "bsdk@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());