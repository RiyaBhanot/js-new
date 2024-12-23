//if else

const temp = 46
if (temp < 50) {
    console.log("less than 50")
}
else {
    console.log("temp greater than 50")
}
console.log("it is executed everytime");


//functional scope  or scope

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     //var power = "fly" ---- this will not result in any error because var is always globally scoped
//     console.log(`user power is : ${power}`)
// }

// //if we execute the above line outside the scope then it will result in an error because the power variable has its scope  limited  only in if condition.
// console.log(`user power is : ${power}`)


//short hand notation of if statement
// const balance = 1000
// if (balance > 500) console.log("test")

//multiple if else statements
const balance = 2000
if (balance > 2500) {
    console.log("first one");
}
else if (balance > 1800) {
    console.log("second one");
}
else {
    console.log("third one");
}

//and or not statement in if else
const userlogin = true
const debitcard = true

if (userlogin && debitcard) {
    console.log("allow to buy a course")
}
//&& (m percent) all the conditions needs to be true

const googlelog = true
const numberlog = false

if (googlelog || numberlog) {
    console.log("allow for login")
}

// ****(pipe sign) || or operator checks for any one condition to be true























//In JavaScript, the operators != and !== are used to compare two values, but they work differently because of type coercion.

//  != (Loose Inequality)
// What it Does: Compares two values for inequality after performing type coercion.
// **Type Coercion**: If the values are of different types, JavaScript attempts to convert them to the same type before comparing.
// Use Case: Generally discouraged because it can lead to unexpected results due to automatic type conversion.
5 != '5';      // false (type coercion: '5' is converted to 5)
0 != false;    // false (type coercion: false is converted to 0)
null != undefined; // false (type coercion: null and undefined are treated as equal)

// !== (Strict Inequality)
// What it Does: Compares two values for inequality without type coercion.
// Type-Safe: The values must be of the same type and value to be considered equal.
// Use Case: Preferred over != because it avoids unexpected type coercion.
// Examples:
5 !== '5';     // true (no type coercion: number !== string)
0 !== false;   // true (no type coercion: number !== boolean)
null !== undefined; // true (null and undefined are different types)


