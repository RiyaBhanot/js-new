// FOR EACH LOOP NEVER RETURNANY VALUE INSTEAD THEY GIVE UNDEFINED.
//Example
// const nrki = [1, 2, 3, 4, 5]
// const riya = nrki.forEach((item) => {
//     // console.log(item); // does not return any value when stored into a variable and that variable is called, then it returns undefined with other output // **print for better understanding**
//     // return item    //does not return any value
// })

// console.log(riya);



//filter 
//if  we want to apply additional conditions

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//another way of writing arrow function in this 
const newnums = nums.filter((num) => (num > 4))
// const newnums = nums.filter((num) => {
//     return num > 4             // if we write console.log(num > 4) here, then it will give true false(according to condition) instead of numbers.
//     //// Returns true or false for each element 
// })

console.log(newnums); /// Logs the filtered array


//same above condition with for each loop 
//for this we have to first create an empty array then we have to push values into it accordingly
const new1 = []
nums.forEach((item) => {
    if (item > 4) {
        new1.push(item)
    }
})
console.log(new1);


const books = [
    { title: "The Alchemist", genre: "Fiction", year: 1988, edition: "First" },
    { title: "Sapiens", genre: "Non-Fiction", year: 2011, edition: "First" },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", year: 1997, edition: "First" },
    { title: "The Great Gatsby", genre: "Fiction", year: 1925, edition: "Second" },
    { title: "To Kill a Mockingbird", genre: "Fiction", year: 1960, edition: "First" },
    { title: "A Brief History of Time", genre: "Science", year: 1988, edition: "Third" },
    { title: "The Lord of the Rings", genre: "Fantasy", year: 1954, edition: "First" },
    { title: "1984", genre: "Dystopian", year: 1949, edition: "First" },
    { title: "Pride and Prejudice", genre: "Romance", year: 1813, edition: "Second" }
];


let userbooks = books.filter((book) => (book.genre === 'Fiction'))
userbooks = books.filter((book) => (book.year >= 2000))
userbooks = books.filter((book) => (book.year >= 1950 && book.genre === 'Fiction'))

console.log(userbooks);

//The filter() method in JavaScript is used to create a new array containing elements from the original array that pass a specific test or condition.
// It doesn’t modify the original array and only includes the elements for which the callback function returns true.

// How It Works
// Iterates over each element in the array.
// Applies the callback function to each element.
// Includes the element in the new array if the callback function returns true.


