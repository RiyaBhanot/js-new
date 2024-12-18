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
//   console.log(number1+number2)
}

add2numbers(3,4) // here are arguments

// console.log(NaN === NaN) ----- interview ques in alert enterprise
/* BELOW UPTO LINE 80 IS THE COPIED CODE FROM THE PREVIOUS MACHINE */

//A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
//The name of the function.
//A list of parameters to the function, enclosed in parentheses and separated by commas
// Functions are one of the fundamental building blocks in JavaScript.
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, 
// but for a procedure to qualify as a function, it should take some input and return an 
// output where there is some obvious relationship between the input and the output. 
// To use a function, you must define it somewhere in the scope from which you wish to call it.

//1st method
function addtwonumbers(number1,number2) //---- number1 and number2 is parameters
{
    // console.log(number1+number2)
}
// What It Does:
// It logs the result of the addition (number1 + number2) to the console.
// Does not return any value; the function's output cannot be reused in other parts of the program.
// Use Case:
// Suitable for cases where you only need to see the result in the console, and there's no need to store or further manipulate the sum.
// Limitations:
// The sum cannot be reused elsewhere in the code because the function does not return a value.





// //2nd method
// What It Does:

// It calculates the sum of number1 and number2 and returns the result to the caller.
// The caller can then store the result in a variable, print it, or use it in further computations.
// Use Case:
// Ideal when the sum needs to be reused or manipulated elsewhere in the program.
// Advantages:
// The return value can be assigned to a variable or passed to another function for further processing.
function addtwonumbers(number1,number2) //---- number1 and number2 is parameters
{
    let result = number1+number2
    return result
}

// addtwonumbers(3,4) //---- here 3,4 is an arguments
// console.log("result is : ",addtwonumbers(3,4))
//Choosing Between Them
// Use the first function for quick debugging or displaying results.
// Use the second function in most cases, especially if the result needs to be reused or further processed.

// 3rd method
function addtwonumbers(number1,number2) //---- number1 and number2 is parameters
{
    // let result = number1+number2
    return number1+number2
}
// console.log("result is : ",addtwonumbers(3,4))
 //


//  another method of defining function
// const riya = function(a,b){
//     return a - b
// }
// console.log(riya(5,4));


//In a function where there is a return statement, then the code after that  return statement will never get executed
//example
//function add(number1+number2)
//return result
//console.log("riya") // this statement will never get executed

//another function using string intetrpolation
// function loginMsg(username)
// {
//     return `${username} just logged in`
// }

// console.log(loginMsg("Riya")) // here if we pass an empty string then it will act like----
// console.log(loginMsg(""))
// // if we pass nothing then it will display undefined just loggin in
// console.log(loginMsg())

// // if else in the above code
// function loginMsg(username)
// {
//     // if(username === undefined){
//     //     console.log("please enter a username")
//     // }
//     return `${username} just logged in`
// }

// console.log(loginMsg(""))

//another way of doing the above code
//
function loginMsg(username)
{
   if(!username){ //-- in js !not means undefined and also "" empty string means false so whenver we pass nothing or a empty string inside this ,this statememt 
//will get execute 
        console.log("please enter a username")
     return
    }

    return `${username} just logged in`
}
console.log(loginMsg(""))

//ayush confuse me in this
// let obj = {
//     value: 35
// };

// function riyaa(obj){
//     obj = {value: 54}
//     console.log(`Inside function ${obj.value}`); 
// }
// console.log(`Before calling functi on ${obj.value}`);
// riyaa(obj)
// console.log(`After calling function ${obj.value}`); 