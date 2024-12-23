//immediately Invoked Function Expressions (IIFE)
//used where we want to invoke a function immediately
//used when we dont want a global scoped pollution
//An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is executed as soon as it is defined.
// It's a common pattern used to create a private scope for variables and functions, avoiding polluting the global namespace.

//syntax
//(function definition)(execution call)

// (function chai() {
//     console.log("DB Connected")
// })()

// first function needs to be terminated by using this (;) so that we dont get any error in second function
//iife function
(function () {
    console.log("i am riya")
})();
//arrow function iffe
console.log(((a, b) => a + b)(2, 3));

//arrow function with iife
//simple iife
((name) => {
    console.log(`DB connected ${name}`)
})('riya');

//named iife because this function has its own name
(function riya() {
    console.log("nrki")
})()







