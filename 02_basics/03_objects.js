// Singleton 
// Object.create

// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nihal",
    "full name": "Nihal Lakra",
    [mySym]: "I am really Genius",
    age: 25,
    location: "Ramgarh",
    email: "lakranihal0070@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full name"]);
//if you create object key with "" you have only one option to access that which is in line no 21 and if you create it without "" you can also access it with . (JS take the keys in "" double quotes by itself )

console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "Anisha@google.com"
// Object.freeze(jsUser)
jsUser.email = "Anishadancer@google.com"
console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS User");
}
jsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
