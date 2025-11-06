// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 89765435678908756545657890n


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["Spider-Man", "Iron-Man", "Black Panther"]

let obj = {
    name: "Nihal",
    age: 25
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof heros);
