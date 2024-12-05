//object destructuring
const course ={
    coursename : "javascript",
    price : 720,
    courseTeacher : "youtube"
}

//to access this
//dot notation-----
//Straightforward and commonly used for direct access.
// Does not create a new variable. It just retrieves the value of the property when needed.
// If you only need to access the property once, this is the simpler option.
console.log(course.courseTeacher)


//Destructuring Assignment (const { courseTeacher } = course)
//How It Works: Extracts the value of the specified property into a new variable using object destructuring.
//Key Points:
// Creates a new variable (courseTeacher) with the value of the property.
// Useful when you need to work with multiple properties from the object without repeatedly referencing the object name.
// Makes code cleaner and more concise when dealing with multiple extractions

const{courseTeacher} = course  //here "courseteacher" is the prorperty and we can define as many as properties we want  by placing a comma between them
//"course" is the object name

console.log(courseTeacher)
//When to Use Which?
// ***********Use dot notation if:
// You only need the value temporarily.
// You don't want to create a new variable.
// **************Use destructuring assignment if:
// You need to work with the value repeatedly in your code.
// You want cleaner and more readable code for multiple property extractions.
// You aim to reduce redundancy when accessing the same object properties multiple times.

const{coursename : name} = course // we can also define custom name to the properties by this syntax
console.log(name)


///////API concept//////////////
//APIs are the values that come from backend and how to write them is the conept of APIs
//earlier values came in the format of XML structure but now it came in JSON Format
//JSON Format// in object format
// {
//     "name": "riya",
//     "email":"riya@nrki.com",
//     "fees": "pending"
// } -- this is the format of JSON values

// JSON values can also be in the array format like----
//[ --- array
//{} --- object
//{}
//]

//now we can convert the JSON values into object or array format from their we can access the values using the methods which we have
// used to access the values from different objects
//********JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. 
//It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).  */
//JSON is a text-based data format following JavaScript object syntax


//refer to mdn docs

