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
function loginMsg(username = "RIya") // we can also pass any default value  in the parameters also so that if we not pass any value it can take this value
{
   if(!username){ //-- in js !not means undefined and also "" empty string means false so whenver we pass nothing or a empty string inside this ,this statememt 
//will get execute 
        console.log("please enter a username")
     return
    }

    return `${username} just logged in`
}
// console.log(loginMsg())

//*************************ayush confuse me in this**************************************************
//below explanation-----
//in JavaScript, parameters are passed by value.
//  When you pass a value to a function and assign a new value to the parameter 
// inside the function, the change is local to the function and does not affect the original value outside the function.
// Objects in JavaScript are also passed by value.
// However, when you pass an object to a function, the value being passed is the reference to the object.
// So, modifying the properties of the object affects the original object, but assigning a completely new object does not.
//Key Takeaways:
// 1. Primitive values are passed by value. Assigning a new value to the parameter inside the function does not affect the original variable.
// 2. Objects are also passed by value, but the value is a reference to the object. Modifying properties of the object affects the original object, but assigning a completely new object does not.

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


//when we create a shopping cart in our project in which we have to add items then we never know about the values to be added 
// so in that case we use rest operator (...) also called spread operator

function calculateItemsCart(val1,val2,...num)
{
  return num // we can only pass one value in the return function so in order to pass multiple values we have to pass an array or an object into it.
}

console.log(calculateItemsCart(100,200,300,400))

//just for reading
//Type safety in the source code is a programming language control that ensures that any variable 
//access only its authorized memory locations in a well-defined and permissible way. 
// In other words, the type safety feature ensures that the code doesn't perform any invalid 
// operation on the underlying object.

const user = {
    username:"riya",
    price:"400"  // if here the price word changes to prices than the below called function will print undefined in username.price statement
                 // so to resolve this we promptly check the typesafety of our code.
                 //in typescript, it can easliy be checked but in js we have to write extra code for it.
}

function handleobject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`) 
}

// handleobject(user)

//in the above code we are making an object and then we are passing it to the function, but we can also directly pass it to the function by the below code
handleobject(
    {
        username:"nrki",
        price:"300"
    }
)

//we can also pass arrays into our function by ----
const newarr = [100,200,300,"riya"]
function arrpass(myarr){
    return myarr
}
console.log(arrpass(newarr)) // normal method, by creating an array above and then passing it to the function

//we can also pass this by directly creating
console.log(arrpass([200,300,400,800])) // direct passing and creation of an array