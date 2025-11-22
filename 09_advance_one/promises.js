const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // Database calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(function () {
    console.log("promise consumed");
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: "Nihal",
            email: "Example@gmail.com"
        })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true // Or false
        if (!error) {
            resolve({
                username: "Sunshine",
                password: "123"
            })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
        console.log(user);
        return user.username
    })
    .then((myusername) => {
        console.log(myusername);
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The Promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true // Or false
        if (!error) {
            resolve({
                username: "haaqthu",
                password: "123"
            })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// };
// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)