// let myName = "Nihal      "

// console.log(myName.trueLength);





let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nihal = function() {
    console.log(`nihal is present in all objects`);
}

Array.prototype.heynihal = function() {
    console.log(`heynihal is present in all array`);
}

myHeros.heynihal()
// heroPower.heynihal()

// heroPower.nihal()
myHeros.nihal()


const user = {
    name: "ADS",
    email: "ads22@gmail.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "chaiaurcode       "

String.prototype.trueLength  = function() {
    // console.log(`{this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()