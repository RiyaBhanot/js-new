console.log("2" > 0 ) // automatically converts a string into number and then checks the result
console.log(null > 0) // comparison operators convert null into 0 so it gives false here
console.log(null == 0)
console.log(null >= 0) // comparison operators convert null into 0 so it gives true here because null is equals to 0

console.log(undefined == 0) // gives false in all cases
console.log(undefined > 0)
console.log(undefined  < 0)

// == and ===
// === also checks datatypes
console.log("2" == 2)
console.log("2" === 2)
