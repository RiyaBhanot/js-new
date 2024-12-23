const user = {
    name: "nrki",
    price: "999",
    welcomeMsg: function () {
        console.log(`${this.name}, welcome to webiste`)
        // console.log(this) // gives the  current context

    }
}

// user.welcomeMsg()
// user.name = "riya"
// user.welcomeMsg()
console.log(this) // this will give empty string because the context is not defined 
//The this keyword refers to the context where a piece of code, such as a function's body,
// is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to,
// thus allowing the same method to be reused on different objects.


//arrow function
//explicit method of arrow functions
// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add2(1, 2))


//implicit method of arrow functions
const add3 = (num1, num2) => (num1 + num2)
console.log(add3(1, 2))

//method to return an object in arrow functions
const add4 = (num1, num2) => ({ username: "riya" })
console.log(add4(1, 2))

//arrow func in loops 
const arr = [1, 2, 3, 4]
arr.forEach(() => { }) //elaborating in next video 

//arrow function in js
//(param1, param2, ...) => {
// function body
//}


