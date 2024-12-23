// In JavaScript, truthy and falsy values determine how expressions are evaluated in boolean contexts (e.g., inside an if statement).
// Any value in JavaScript can be considered either truthy or falsy.

// Falsy Values
// These are values that are considered false when converted to a boolean.

// List of Falsy Values:
// 1. false
// 2. 0 (the number zero)
// 3. -0 (negative zero)
// 4. "" (empty string)
// 5. null
// 6. undefined
// 7. NaN (Not a Number)
// 8. BigInt 0n

if (false) console.log("This won't run.");
if (0) console.log("This won't run.");
if ("") console.log("This won't run.");
if (null) console.log("This won't run.");
if (undefined) console.log("This won't run.");
if (NaN) console.log("This won't run.");

//***** Output: Nothing is logged because all the conditions are falsy.


// Truthy Values
// All values that are not falsy are considered truthy. These include:

// true
// Any number other than 0 or -0 (e.g., 1, -5, 3.14)
// Non-empty strings (e.g., "hello", "false") ----- string ke andr koi bhi value add ho gyi to it is true so "0" is true in this case
// Objects (e.g., {}, [])
// Functions ---- empty function(){}
// Infinity and -Infinity
// Examples of Truthy Values:
if (true) console.log("This will run.");
if (42) console.log("This will run.");
if ("hello") console.log("This will run.");
if ([]) console.log("This will run.");
if ({}) console.log("This will run.");
if (function () { }) console.log("This will run.");


//****** output: all values are logged because all conditions are truthy.


// to check an empty array in if else
const arr = []
if (arr.length === 0) {
    console.log("array is empty")
}

//to check an object is empty or not
const obj = {}
if (Object.keys(obj).length === 0) {  // here we use Object's method .keys() to check and after that it return the array of keys in a defined object so to 
    // check furthur we use .length property of array to check the length of array and then we can consider that our obj is not empty
    console.log("object is empty");
}

//for interview point of view
console.log(false == 0)// outputs true
console.log(false == '') // outputs true
console.log(0 == '') // outputs true


//nullish coalescing operator (??)  : it is solely for null and undefined
// The nullish coalescing operator (??) in JavaScript is used to provide a default value when the left-hand side operand is null or undefined. 
// It is a cleaner and more specific alternative to the logical OR operator (||) in certain scenarios.
//If operand1 is not null or undefined, the operator returns operand1.
// If operand1 is null or undefined, the operator returns operand2.

let val1 = null
val1 = 5 ?? 10
console.log(val1)

let val2 = undefined
val2 = undefined ?? 15
console.log(val2)



// Difference Between ?? and ||
// The logical OR (||) operator also provides a default value but considers all falsy values (0, false, "", null, undefined, NaN)
//  as equivalent to "absent." In contrast, ?? only considers null and undefined.



//Ternary operator
const iceTea = 200
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80")