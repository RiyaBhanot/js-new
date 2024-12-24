// The map() method in JavaScript is used to create a new array by applying a transformation function to each element of an existing array. 
// It does not modify the original array but returns a new array with the results of the callback function applied to each element.
//Key Points
// Always returns a new array.
// The length of the resulting array matches the original array.
// Use map() when you want to transform data, not just iterate over it.

const nums = [1, 2, 3, 4, 5, 6]
//as we are calling arrow function explicitly then we have to write "return" with it.
const newnums = nums.map((item) => { return item + 10 })
// console.log(newnums);

//doing above codde with for each loop

const arr = []
nums.forEach((item) => {
    return arr.push(item + 10)
})

// console.log(arr);

//*****CHAINING *******//
// Chaining in JavaScript refers to calling multiple methods on an object or array in a single statement. 
// It allows for cleaner and more readable code by reducing intermediate variables and streamlining operations.
// Each method in the chain operates on the output of the previous method.


//How Chaining Works
// Chaining is possible because many methods, such as those in arrays, strings, and promises, return an object
//  (or the same type of object) that supports further method calls.

const new2 = [1, 2, 3, 4, 5, 6]
const newnums2 = new2.map((num) => (num * 10))  //updated value get passed on to the next value
    .map((num) => (num + 1))
    .filter((num) => (num >= 40))

console.log(newnums2)





