const user = {
    name:"nrki",
    price : "999",
    welcomeMsg : function()
    {
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
