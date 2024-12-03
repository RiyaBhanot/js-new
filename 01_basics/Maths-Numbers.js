const score = 400 // here we are not explicity defining it but js will take it as a number // option 1
// console.log(score)

const score1 = new Number(400)
// console.log(score1)  // here we are explicitly defining that it is a number, which in output will show the type of it //option 2
//Primitive numbers should almost always be used for better performance and simplicity. ----- option 1
//Number objects are rarely needed. They might be used in special cases where you explicitly want to attach properties. ---- option 2

// console.log(score1.toString()) //will convert the number into string and after converting it into string we can use the methods of strings with this
// console.log(score1.toString().length)// will give the length of the converted number 
// console.log(score1.toFixed(2)) // gives precision value //majorly used in E-commerce websites where we use this feature for pricing and all.
const score2 = new Number(1123.8966)
// console.log(score2.toPrecision(5)) // it converts the digit to the given significant number by adding decimals or by adding exponential values
//refer to W3 Schools for this //also formats or converts the number as a string
//if we are using  the signified value less than the number of digits before decimal value than this acts as by placing a decimal after one digit and rest converting into exponential
//if we are using the signified value greater than the number of digits before the decimal value than this can act by adding precision to them 
//refer to above example and W3 schools for this
const hundreds = 10000000
// console.log(hundreds.toLocaleString()) // this will place commas into the number but it international standards 

// console.log(hundreds.toLocaleString('en-IN')) //for indian standard, we refer this


/////////////////+++++++++++++++ MATHS +++++++++++++++++//////////////////////////

// MATHS is a object in js
console.log(Math) // math is a object
console.log(Math.abs(-2)) // convert the value into absolute format which means it only converts the -ve values into +ve, but not the +ve into -ve 
console.log(Math.abs(2)) // answer will remain the same
console.log(Math.round(4.6))//round off the value
console.log(Math.ceil(4.6)) //gives the ceiling value which means this will give 5 (ceiling as top value)
console.log(Math.floor(4.6)) // gives the floor value which means this will give 4 only (floor as lower value)
console.log(Math.min(4,6,7,8,0,1,-1)) // gives the minimum value in the array
console.log(Math.max(4,6,7,8,0,1,-1)) // gives the maximum value in the array
console.log(Math.random()) // gives random numbers but only in the range of 0 to 1 always // 0 can be included but never 1(it is excluded always)
console.log(Math.random()*10) // gives value by shifting the decimal point if the random value is 0.12334 so the value will become 1 which we can use while
//developing dicing games
//but what if we don't need to include 0 in it si to avoid this we use the below formula
console.log((Math.random()*10)+1) // +1 ensures that the value will never become zero
console.log(Math.floor(Math.random()*10)+1)  // generally round off the value to the lower value



//formula//*****important ******/

const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max - min + 1))+ min) // the last minimum we have added because we don't want the value to be lower than the minimum
//refer to mdn docs for this
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

