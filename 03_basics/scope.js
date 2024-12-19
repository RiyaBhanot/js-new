
var c = 300
let a = 350
const d =450
if(true){
    let a = 400
    var c = 350
    const d = 600
     a = 5 // this is not allowed 
}

// console.log(a)
// console.log(d)
// console.log(c)

//var:
// Function-scoped. A variable declared with var is accessible within the entire function it's declared in, regardless of block scope.
// let:
// Block-scoped. A variable declared with let is only accessible within the block it's declared in (e.g., inside a loop or an if statement).
// Redeclaration:
// var: Can be redeclared within the same scope.
// let: Cannot be redeclared within the same scope.

// function example() {
//     if (true) {
//       var x = 10; // Function-scoped
//       let y = 20; // Block-scoped
//     }
  
//     console.log(x); // Outputs 10 (accessible)
//     console.log(y); // Error (not accessible outside the block)
//   }
//closure

//function scoping

// function one(){
//     const username = "riya"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }

//     // console.log(website) ---- gives error because its scope is not here
//     two()
// }
// one()

// scoping in if else
if(true)
{
     const username="riya"
    if(username === "riya")
    {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) // give error due to scoping issue
}
// console.log(username) // give error due to scoping issue

//////////////////**********important  and interesting**************************////////////////////
console.log(addone(5)) //this will not
function addone(num)
{
  return num+1
}


//second method of difining functions // ********* called as FUNCTION EXPRESSIONS *************/
addtwo(5) ///// this will give error
const addtwo = function(num)
{
    return num+2
}
 


//below explanation of above fact of calling function
//this is called (Function hoisting)  and is a JavaScript feature that moves function 
// declarations to the top of their scope before code execution.
//This allows you to use a function before it's declared in the source code.
//  For example, you can define a function anywhere in the program code and still call it before it's declared. 
// How it works
// Hoisting is a built-in behavior of the JavaScript interpreter. It moves declarations to the top of their scope, 
// regardless of whether the scope is global or local. However, the assignments are left in place. 
// Function expressions
// Function hoisting only occurs for function declarations, not function expressions. Function expressions are defined with a function as a variable, such as var b = function(). 
// Hoisting is a special behavior of the JavaScript interpreter. It guarantees that regardless of where declarations appear within a scope, they can be accessed throughout that scope

//CLOSURE
// A closure is a function having access to the parent scope, even after the parent function has closed.