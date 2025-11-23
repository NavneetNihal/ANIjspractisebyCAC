let userSh = {
    username: "Nihal",
    logincount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails()) 
// console.log(this);



function user(username, logincount, isLoggedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn


    this.greetings = function(){
        console.log(`welcome: ${this.username}`);
    }


    return this
}

const userOne = new user("Nihal", 22, true)
const userTwo = new user("Anisha", 22, true)
console.log(userOne);
console.log(userTwo);