// For Of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

// Maps 

const map = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United States of America")
map.set(`FR`, "France")

console.log(map);

for (const key of map) {
    console.log(key);
    
}
for (const [key, value] of map) {
    console.log(key, `:-`, value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'

}

// object is not iterable in for of loop object can iterate but not with for loop we can still iterate it just with different loop and method.

// for (const [key, value] of myObject) {
//     console.log(key, `:-`, value);
    
// }
