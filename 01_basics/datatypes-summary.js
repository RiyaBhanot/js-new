//primitive datatypes
// 7 types -- string , number, boolean , null, undefined, symbol, BigInt
const id = Symbol("234")
const firstid = Symbol("234")
// console.log(id === firstid)
let bigNumber = 12324567890987654442345n
console.log(typeof bigNumber)
// reference types ---- arrays, objects, functions
let array = ["riya" , "nrki", "ayush"]
let myobj = {
    name :"Riya",
    age : 22,
    gender : "female",
}

const myfun = function(){
    console.log("hello world")
}

console.log(typeof myfun)


