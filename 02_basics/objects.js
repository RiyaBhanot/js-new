// singleton
//in which we use constructor method to create objects which is 
// Object.create ------ this will always gives singleton object

//object literals
const obj1 = {}
// console.log(obj1) //---- gives empty object
const obj2 = {
    name : "riya",
    "full name" : "riya bhanot",  //--- this can't be accessed using . dot method
    age : 20,
    location : "punjab",
    email : "riya@gmil.com",
    isloggedin : false,
    lastLoginDays : ["monday,tuesday"]
}

//To access the elements of the objects ----
//1st method
// console.log(obj2.email)
// console.log(obj2.full name) ---- will give error
// console.log(obj2."full name") ---- this will also give error thats why we use 2nd method
// //will gives the email 
//but its drawback is that if we want to access the element and the key of that is in "string" (this form), then we can't access it by using this method
//because there is no such syntax exist so to overcome this we use the below method-----

//2nd method
//  console.log(obj2["email"])
//  console.log(obj2["full name"])

// Symbol creation 
const mysym = Symbol() // symbol is created
const obj3 = {
    name2 : "vishal",
    [mysym]  : "haha" //syntax for symbol
}

// console.log(typeof obj3[mysym]) 


//to change values of object in js
obj2.email = "nrki@gmail.com"
// console.log(obj2)

//if we dont want anyone to change the values of object then we can freeze that object
// by using-----
// Object.freeze(obj2) 
// now if we make changes then it will neither change it nor give any error
//just it remain unchanged
obj2.email = "nrki@chatgpt.com"
// console.log(obj2)

obj1.riya = function(){  
    console.log("i am girl")
}

//here obj.riya is a custom defined property which is possible in 
//non-primitive declaration of object. ---- this is also a main difference between 
//primitive(direct declaration by writing variable) and non-primitive declaration(by using "new" operator)
//in which we can define custom properties in non-primitve but this is not
//possible in primitve

// obj2.riya = function()

//here if i use obj2 -- which is freezed earlier so it will not give any output so then i have to
//unfreeze it first.



//this will print the function
obj1.riya()


obj2.nrki = function(){
console.log(`hello JS User,${this.name}`)} //--------- acessing object's elements using "this" (reference object)

obj2.nrki() //------function calling
