//primitive datatypes
// 7 types -- string , number, boolean , null, undefined, symbol, BigInt
const id = Symbol("234")
const firstid = Symbol("234")
// console.log(id === firstid)
let bigNumber = 12324567890987654442345n
// console.log(typeof bigNumber)
// reference types ---- arrays, objects, functions
let array = ["riya" , "nrki", "ayush"]
let myobj = {
    name :"Riya",
    age : 22,
    gender : "female",
}

const myfun = function(){
    // console.log("hello world riya")
}

// console.log(typeof myfun)


//////////////////memory
////////stack(primitive) , heap(non- primitive)
// stack -- call by value(changes are made in the copy)
// heap -- call by reference(changes are made in the actual one)
// stack---- isme sirf copy mein chsnges ayenge
let name = "riya"
let name2 = name
name2 = "vishal"
console.log(name2)
console.log(name)

// heap ---- dono mein change hoga 
let user1 = {
    email : "riya.com",
    upi : "upi@hji"
}

let user2 = user1
user2.email = "nrki.com" //----- .email is the function to acess the object's methods

console.log(user2.email)
console.log(user1.email)






