
//***********while loop *********/
let i = 0;

//syntax of while loop
// while (condition) {

// }

// while (i <= 10) {
//     console.log(`value of i  is ${i}`)
//     i = i + 2;
// // }

// let j = 0
// let myarr = ["nrki", "riya", "ayush", "payal di"]
// while (j < myarr.length) {
//     console.log(` ${myarr[j]}`)
//     j++;
// }

//*******do while loop *********/
let r = 10   // a special case in do while loop is that if in any case our value initially is greater than the condition defined then,no matter what the 
do {
    console.log(`the value is ${r}`) // this statement will get executed (only one time) after  that it will check the condition 
    r++
} while (r <= 10)



/////************////////
//  while and do...while loops in JavaScript are both used to execute a block of code repeatedly as long as a specified condition is true.
//  However, there’s a key difference between the two:

// while loop: The condition is checked before executing the code block.
// do...while loop: The code block is executed at least once, and the condition is checked after.


// 1. while Loop
// The while loop executes a block of code as long as the condition evaluates to true. If the condition is false initially, the loop will not run at all.


// 2. do...while Loop
// The do...while loop always executes the block of code at least once, even if the condition is false.
// This is because the condition is checked after the code block is executed.


//Common Use Cases

// while Loop:
// Running a loop only if a condition is met.
// Examples: Processing user input until valid, waiting for a specific event.


// do...while Loop:
// Running code that must execute at least once, such as:
// Displaying a menu.
// Asking for user input at least once.


//REAL WORLD USE CASES OF FOR LOOP, WHILE AND DO WHILE LOOP

//1. for Loop
// The for loop is commonly used when you know the exact number of iterations you need.
// It’s ideal for tasks that involve iterating over data like arrays or performing repetitive tasks with a predefined limit.
//examples: Iterating Over a List of Items,Generating Multiplication Tables, Filling UI Elements:( Adding rows to a table dynamically on a webpage)


//2. While loop
// The while loop is ideal when the number of iterations is not known beforehand and depends on dynamic conditions.
//examples: Waiting for a Specific Condition:(Continuously checking for a user to press a button),Processing user input:(Asking a user for correct input repeatedly),
//Game Loops:(A game continues running until the player loses)


//3. Do-While loop
//The do...while loop is useful when you need to ensure the code block runs at least once, regardless of the condition.
//examples:Asking for User Input (At Least Once),Displaying a menu at least once, even if the user exits immediately.
