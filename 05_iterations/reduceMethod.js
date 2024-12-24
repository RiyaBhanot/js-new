//REDUCE METHOD
//The reduce() method in JavaScript is used to reduce an array to a single value by applying a callback function
// to each element of the array. It is a versatile method often used for summing values, flattening arrays, or creating objects from arrays.
//callback: A function that executes on each element of the array.
// accumulator: The accumulated value returned after each callback execution.
// currentValue: The current element being processed.
// initialValue: An optional value to start the accumulation. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.
// Return Value:
// Returns a single value that is the result of applying the callback to all array elements.

// Real-World Use Cases
// Calculating Totals: Sum prices in a shopping cart.



//syntax of reduce method
//const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );


const num = [1, 2, 3, 4]
const num2 = num.reduce(function (acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`)
    return acc + currval
}, 0)

console.log(num2);

//for each loop with same purpose
const num3 = [1, 2, 3, 4];
let sum = 0; // Initialize accumulator variable
num.forEach(function (currval) {
    console.log(`currval: ${currval}`); // Log current value
    sum += currval; // Add current value to the accumulator
});

console.log(sum); // Output: 10


//same function with for each loop but with complex method by creating empty array and pushing values accordingly(not so preferred)
let sum1 = 0;  // Initialize accumulator variable
let newArray = [];  // Empty array to store the values

num3.forEach(function (currval) {
    console.log(`currval: ${currval}`); // Log current value
    newArray.push(currval); // Push current value into new array
    sum1 += currval; // Add current value to the sum
});

// Now, you can use reduce for the same operation
const result = newArray.reduce(function (acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`); // Log accumulator and current value
    return acc + currval; // Perform the reduce operation
}, 0);

console.log('Sum from reduce operation:', result); // Output the final sum
console.log('Sum accumulated via forEach:', sum);  // Output the sum from forEach



//filter method with arrow function
const mytotal = num.reduce((acc, currval) => (acc + currval), 0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 99
    },
    {
        itemName: "python course",
        price: 90
    },
    {
        itemName: "cpp course",
        price: 95
    },
    {
        itemName: "java course",
        price: 100
    },
    {
        itemName: "C course",
        price: 80
    },
]

const price2pay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(price2pay);








