//Javascript execution context
//this means that how will the js run or execute the created file
//js run our program into two phase

//sbse pehle global execution context bnta hai and it is referred to varialbe which is THIS variable (in node)
//in browser the global execution context is reffered as Window object

// execution contexts
//global execution context
//function or functional execution context
//Eval execution context

//*********two phases of execution in js *************//
//1st one
//Memory creation phase
//the variables or functions which have been created are allocated to a memory in this phase
//execution phase
//executes all the processes


//*******REFER TO  03_basics\howJsWorks.jpg  *********///// FOR UNDERSTANDING///////////

//detailed explanation
// When JavaScript code is executed, it goes through two main phases:

// Creation Phase (Memory Allocation)
// Execution Phase (Code Execution)
// This process applies to both the Global Execution Context (when the script starts) and any Function Execution Context (when a function is invoked).



//1. Creation Phase (Memory Allocation)
// During this phase:

// The execution context is created, which provides an environment for the code to run.
// Memory allocation happens for variables, functions, and objects.
// Key Steps in the Creation Phase:
// Global Object Creation:

// In the browser: window
// In Node.js: global
// this Binding:

// The this keyword is set to refer to the global object (window in browsers).
// Memory Hoisting:

// Function Declarations: Stored in memory with their full definitions.
// Variables (var, let, const):
// Declared using var are hoisted but initialized with undefined.
// Declared using let and const are hoisted into the Temporal Dead Zone (TDZ) without initialization
//example
console.log(a);       // undefined (hoisted but not initialized yet)
console.log(b);       // ReferenceError: Cannot access 'b' before initialization

var a = 10;
let b = 20;

function greet() {
    console.log("Hello!");
}

// What Happens During the Creation Phase?

// var a: Hoisted and initialized to undefined.
// let b: Hoisted but not initialized (TDZ).
// function greet: Hoisted with full definition.

// 2. Execution Phase (Code Execution)
// In this phase:

// The JavaScript engine executes the code line by line in the call stack.
// Variable values are assigned, and functions are invoked.
// Key Steps in the Execution Phase:
// Line-by-Line Execution: The JavaScript engine runs the code in the order it appears, resolving values for variables and calling functions.

// Function Invocation:

// When a function is invoked, a new Function Execution Context is created, following the same creation and execution phases.

//example
function add(a, b) {
    return a + b;
}

let result = add(5, 3); // Execution phase starts here
console.log(result);    // 8

// During Execution:
// add(5, 3) creates a new function execution context.
// Arguments a and b are initialized with values 5 and 3.
// The return value 8 is assigned to result.


//detail explanation of both phases
//example
console.log(greet); // Function hoisted
console.log(age);   // undefined (hoisted var)
greet();

var age = 25;

function greet() {
    console.log("Hello, world!");
}

// Creation Phase:
// Global Object and this are set up.
// Hoisting happens:
// var age is hoisted with an initial value of undefined.
// function greet is hoisted with its full definition.
// Execution Phase:
// The first console.log(greet) logs the hoisted function.
// The second console.log(age) logs undefined.
// The greet() function is executed and prints "Hello, world!".
// Finally, age is assigned the value 25.

// Hoisting and Temporal Dead Zone (TDZ)
// Hoisting:
// JavaScript moves declarations to the top of their scope. Only declarations are hoisted, not initializations.

// Temporal Dead Zone (TDZ):
// Variables declared with let and const exist in the TDZ from the start of their scope until their declaration is encountered.

// Summary of the Two Phases
// Phase	Actions
// Creation Phase	Memory allocation, variable/function hoisting, and setting global this.
// Execution Phase	Executes the code line by line, assigns values, and invokes functions.
// This two-phase process ensures that JavaScript understands all the variables and functions before executing the code.

//////////////*************extra ******************/////////////////
//Comparison Table
// Term	                    What It Means	                                          When It Happens	                               Example
// Declaration         Introducing a variable or function name to scope.	      When var, let, const, or function is used.	      let x;
// Definition	       Providing details like value or body of a function.        When you assign a value or write a function body.	  let x = 10; or function greet() {}
// Initialization      Assigning a value to a variable for the first time.	      When a value is first assigned to a variable.	      x = 10;

// The Temporal Dead Zone (TDZ) in JavaScript refers to the time between when a variable
// is hoisted to the top of its scope and when it is initialized with a value. During this period, accessing the variable will result in a ReferenceError.




//CALL STACK IN JS//
// The call stack in JavaScript is a mechanism the JavaScript engine uses to keep track of function calls during code execution.
// It is a data structure that follows the Last In, First Out (LIFO) principle, meaning the last function added to the stack is the first one to be executed and removed.

// How the Call Stack Works
// Function Invocation: When a function is called, it is added (or "pushed") to the top of the call stack.
// Function Execution: The JavaScript engine executes the function.
// Function Completion: Once the function completes, it is removed (or "popped") from the stack.
// Global Context: The stack begins with the global execution context and returns to it when all functions have finished executing.


// Example of Call Stack in Action
function greet() {
    console.log("Hello!");
}

function sayHi() {
    greet();
    console.log("Hi!");
}

sayHi();
console.log("Done!");

// Step-by-Step Execution:
// Global Execution Context: The script starts executing. The global context is pushed onto the call stack.

// sayHi() is Called:

// sayHi is added to the call stack.
// The JavaScript engine begins executing sayHi.
// greet() is Called:

// Inside sayHi, greet is called.
// greet is added to the stack and starts executing.
// greet() Completes:

// greet logs "Hello!".
// It is popped from the stack after completion.
// sayHi Continues:

// Execution returns to sayHi.
// "Hi!" is logged.
// sayHi is popped from the stack after it finishes.
// Back to Global Context:

// Execution returns to the global context.
// "Done!" is logged, and the stack is now empty.


// Call Stack Visualization:
// At various stages of execution:
// 1. Global Execution Context
//    [ Global ]

// 2. sayHi() is called
//    [ sayHi ]
//    [ Global ]

// 3. greet() is called from sayHi
//    [ greet ]
//    [ sayHi ]
//    [ Global ]

// 4. greet() completes
//    [ sayHi ]
//    [ Global ]

// 5. sayHi() completes
//    [ Global ]

// 6. Global Execution Context finishes
//    (Stack is empty)

// Call Stack Features
//1)Single Threaded:
// JavaScript has a single call stack, meaning it can only execute one task at a time.This is why JavaScript is called single-threaded.

// 2)Stack Overflow:
// If too many functions are pushed onto the stack without being popped off (e.g., in an infinite recursion), it can result in a stack overflow error.
function recurse() {
    recurse(); // Infinite recursion
}
recurse(); // Uncaught RangeError: Maximum call stack size exceeded

// 3)Asynchronous Behavior:

// The call stack handles synchronous tasks.
// Asynchronous tasks like setTimeout or fetch are managed by the event loop and callback queue, not directly by the call stack.
