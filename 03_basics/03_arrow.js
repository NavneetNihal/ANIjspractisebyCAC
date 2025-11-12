const user = {
    username: "Nihal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}:  Welcome to our Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Ani"
// user.welcomeMessage()

// console.log(this);

// const chai = function(){
//     let username = "Nihal"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Nihal"
    console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "Nihal" })

console.log(addTwo(3, 4));

// const myArray = [2, 3, 4, 5, 8]

// All three are corrrect

// myArray.forEach(function(){})
// myArray.forEach(() => { })
// myArray.forEach(() => ())