const arr1 = [1,2,3,4,5]
const arr2 = ['A','B','C','D','E']
// console.log(arr1.push(arr2)) //----- it is printing 6 because the push method adds one or more elements to the end of an array and returns the new length of the array. 
//so we have to console the original array in order to get the result
// console.log(arr1) //----- this will give output as 6 elements and the arr2 will acts as a single element

// console.log(arr1[5][4]) // ---- this is not a good approach to access the elements and push operation is not a good method to
// merge two arrays because rather than merging it just add the array as single element not merge them

// for merging we use below methods
const mergedArr = arr1.concat(arr2)
// console.log(mergedArr)

//we also use SPREAD method for this because this method allows us to take up more values other than 2 (which is in concat) ** more preferable than concat **
const spreadArr = [...arr1,...arr2]
// console.log(spreadArr)

//when we hsve array which is like this ----
const arr3 = [1,2,3,4,[5,6,7,8,[9,10,['nrki','riya']]]]
const flatarr = arr3.flat(Infinity) // The flat() method of Array instances creates a new array with all sub-array elements 
//concatenated into it recursively up to the specified depth. depth can be 1,2,3,4 or can be infinity
// console.log(flatarr)

/////****** if we perform data scrapping(Data scraping, also known as web scraping, is the process of using a computer program to extract data from a website or other source and put it into a file or spreadsheet.) */
//then in such cases if our data is in strings,objects and we want it in array format so we use the below methods for conversion
console.log(Array.isArray('riya')) // checks and gives true or flase if this is array or not
console.log(Array.from("riya")) // convert the string into array
console.log(Array.from({name:'riya'})) // gives the empty array as [] // Objects like { name: 'riya' } are plain objects, which are not iterable 
//Since Array.from is designed to work with array-like objects or iterables so the method doesn't know how to iterate over { name: 'riya' }.
//thats why it gives an [] empty array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //The Array.of() static method creates a new Array instance from a variable number of arguments, 
//regardless of number or type of the arguments. // we can add multiple elements to it

//rest refer to mdn docs for this

