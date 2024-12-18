//Functions
//Functions are one of the fundamental building blocks in JavaScript.
//A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, 
//but for a procedure to qualify as a function, it should take some input and return an output 
//where there is some obvious relationship between the input and the output. 
// To use a function, you must define it somewhere in the scope from which you wish to call it.
// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.
// Parameters are essentially passed to functions by value — so if the code within the body of a function 
// assigns a completely new value to a parameter that was passed to the function,
//  the change is not reflected globally or in the code which called that function.
// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function.

function add2numbers(number1,number2){ //here are parameters
  console.log(number1+number2)
}

add2numbers(3,4) // here are arguments

console.log(NaN === NaN)




