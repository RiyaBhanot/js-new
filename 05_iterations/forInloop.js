const myobj = {
    py: "python",
    cpp: "C++",
    js: "javacript",
    rb: "ruby"
}

// syntax of (for in) loop
//  for (const key in object) {
//     // if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];     
//     }
//}

for (const key in myobj) {
    console.log(`${key} shortcut is for : ${myobj[key]}`)
}


const myarr = ["riya", "nrki", "mammi", "papa"]
for (const i in myarr) {
    // console.log(i);          //this will print indexes of array or keys of array which are indexes so we have to write like:-
    console.log(myarr[i]);
}

// for...in Loop
// The for...in loop iterates over the keys (or property names) of an object or the indices of an array.

// Key Features:
// Iterates over keys or indices, not values directly.
// Best suited for objects.
// Can be used with arrays, but it is generally avoided because it iterates over keys (indices in the case of arrays), which can lead to unexpected results.


//Feature	                                   for...of	                                            for...in
// Iterates Over	                           Values of an iterable	                        Keys or property names (indices for arrays)
// Best Suited For	                           Arrays, strings, sets, maps, iterables	        Objects
// Output	                                   Directly gives values	                        Gives keys, which need to be used to access values
// Use with Arrays	                           Iterates directly over array elements	        Iterates over array indices
// Use with Objects	                           Not suitable (throws error unless iterable)	    Suitable for objects

//The for...in loop is not typically used with Map objects in JavaScript because it is designed to iterate
//  over the keys (property names) of objects, not iterable data structures like Map. A Map is a specific iterable
//  object that holds key-value pairs, and its structure requires methods specifically designed to access its contents.
// Instead, we use for...of loops or Map methods like .forEach() to iterate over a Map.


// Map Keys Are Iterables:
// The for...of loop is designed to work with iterable objects like Map, Set, and arrays. for...in is not designed for these structures.



// In JavaScript, objects are not iterable by default. This means you cannot directly use objects with constructs like the for...of loop
// or the spread operator (...) without some transformation. However, objects can be iterated indirectly by accessing their keys, values,
// or entries using specific methods.