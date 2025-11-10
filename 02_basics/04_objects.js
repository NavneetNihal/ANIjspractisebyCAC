// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nihal",
            lastname: "Lakra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const objn = Object.assign({}, obj1, obj2, obj3)
const objn = { ...obj1, ...obj2, ...obj3 }
// console.log(objn);

const users = [
    {
        id: 1,
        email: "randomAss@gmail.com"
    },
    {
        id: 2,
        email: "randomBeyatch@gmail.com"
    },
    {
        id: 3,
        email: "YoMrWhite@gmail.com"
    }
]

// const an = users[0].email
// console.log(an);

users[0].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const{courseInstructor: inst} = course

// console.log(courseInstructor);
console.log(inst);

