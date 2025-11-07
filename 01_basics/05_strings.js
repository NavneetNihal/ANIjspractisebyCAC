const name = "Nihal"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nihal-Anis-ha')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-9, 9)
console.log(anotherString);

const newStringOne = "     Nihal    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://Nihallakra.com/Nihal%20lakra"

console.log(url.replace('%20', '-'))

console.log(url.includes('Nihal'));

console.log(gameName.split('-'));
