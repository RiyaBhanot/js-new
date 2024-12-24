const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (val) {
    console.log(val);
})

//arrow func in for each loop
coding.forEach((a) => {
    console.log(a);

})

function printme(item) {
    console.log(item)
}
//referencing a already created function above
coding.forEach(printme)

coding.forEach((item, i, a) => {      //foreach(value , index, array)
    console.log(item, i, a);

})

//objects in array 
const mycoding = [
    {
        language: "js",
        filename: ".js"
    },
    {
        language: "py",
        filename: ".py"
    },
    {
        language: "cpp",
        filename: ".cpp"
    },
    {
        language: "java",
        filename: ".java"
    }
]
//accessing objects in array using for each loop
mycoding.forEach((item) => {
    console.log(item.language);

})


//The forEach() loop in JavaScript is a method that iterates over elements of an array and executes a provided function once for each array element.
// It's a concise and readable way to loop through arrays.

// Key Features of forEach()
// 1) It works only on arrays or array-like objects.
// 2) Executes a callback function for each element in the array.
// 3) Provides access to the current element, index, and the array itself.
// 4) Cannot break or continue, unlike traditional loops.
// 5) Does not return a value (always returns undefined).

//When to Use forEach()
// When you need to perform an action for every element in an array without modifying the array.
// When you don't need to return any value or control loop behavior (e.g., break or continue).



//In JavaScript, high-order array loops refer to methods provided by the Array prototype that allow '
// iteration over arrays in a functional programming style. These methods accept a callback function as an argument,
// making them more expressive and concise compared to traditional loops. They are called "higher-order" because they
// operate on functions (e.g., they take a function as an argument or return a function).

// Key High-Order Array Methods
// Here are the most commonly used high-order array methods:

// forEach()
// map()
// filter()
// reduce()
// find()
// findIndex()
// some()
// every()
// sort()
// flatMap()