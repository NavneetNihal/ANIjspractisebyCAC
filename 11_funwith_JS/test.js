const myArr = []
// %debugPrint(myArr)

// Continious, Holey 

// SMI (small integer)
// Packed Element
// Double (Float, String, function)


const arrTwo = [1, 2, 3, 4, 5]  // Packed_SMI_ELEMENTS

arrTwo.push(6.0) // Packed_Double_Elements

arrTwo.push('7') // Packed Elements

arrTwo[10] = 11 // Holey Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[[9]]);

// Bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in JS


const arrThree = [1, 2, 3, 4, 5] 
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED


const arrFour = new Array(3)
// just 3 holes. HOLES_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS


const arrFive = []
arrFour.push('1')  // PACKED_ELEMENTS
arrFour.push('2')  // PACKED_ELEMENTS
arrFour.push('3')  // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
arrFive.push(Infinity)

// for, for-of, forEach
