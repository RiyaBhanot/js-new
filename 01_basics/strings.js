const name = "riya" //first method of declaring string
const repocount = 3
// console.log(name + repocount+ "hello")

// string interpolation in which we use backticks(``) we create placeholder ${} and insert values in it
// this is reliable and on the go method because we can also insert methods in the placeholder such as ${name.ToUpperCase}
// modern way of writing string functions
// console.log(`hello my name is ${name} and my repo count is ${repocount}`)
// string declaration 2nd method
// string is a object in javascript in the form of key value pairs
const gamenew = new String('riyaa') //new keyword is used because of object and it is accessing memory
// console.log(gamenew[3]) // accessing 3rd key value pair using this method
// console.log(typeof name)
// console.log(typeof gamenew)
// console.log(name.length)
// console.log(gamenew.__proto__);   // take help from console and it is used to define the methods which we can use with  the strings.
// console.log(gamenew.length) // for calculating the length
// console.log(gamenew.toUpperCase()); //convert the string into uppercase
// console.log(gamenew.charAt(2)) // gives the character at 2nd index
// console.log(gamenew.indexOf('i')) //gives the index of the character
// console.log(gamenew.substring(0,4)) // gives the substring(riyaa) as riya and remove the last letter 'a', it exclude the last number 4 and gives only upto 0,1,2,3
// console.log(gamenew.slice(-4,1)) // same as substring but we can also use -ve values in the string which helps in slicing it means we can count from the right side also but it will be counted as -1,-2,-3,-4 and from left side it will
 //  be counted as 0,1,2,3// the given case is a edge case it will not print anything because -4 will stop at character 'i' and 1 will also stopped at 'i' so as it exclude the ending term so it will not print anything
 //also substring and slicing will work in forward direction only never in backward direction which means we can't the reverse the string
const str1 = "  vishal  "
// console.log(str1.trim()) // used in cases whenever a user is entering input lets say a google form and he/she added whitespaces to their input so 
// automatically at the backend it can be removed by using this method
//used only with whitespaces 
//not used with the spaces which are in between words or sentences // ------ refer to mdn docs for more details
const url = "https://riya.com/riya%20bhanot"
console.log(url.replace('%20', '-')) // %20 is a url encoding technique in which a whitespace in a url is filled up with a %20 so in order to replace this in backend
// we use this method which can replace %20 with any character we want

console.log(url.includes('bhanot')); // checks if the string includes these characters or not. and gives true or false accordingly

const str = "riya-nrki-ranjan-bhanot"
console.log(str.split('-')) //used to covert a string into array refer to mdn docs
// '-' is separater here from which the string got separated and it is converted into array






