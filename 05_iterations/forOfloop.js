// for of loop




const arr = [1, 2, 3, 4, 5]
//  syntax of for of loop
//  for (const element of object) {

//  }

for (const i of arr) {
    // console.log(`the value of arr is ${i}`)
}


const str = "nrki Riya"
for (const j of str) {
    // console.log(`element  is : ${j} `);
}

//The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 
// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, 
// which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).
//both map and object are same and are different in order that the map does n't support duplicate values but object does.
let map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'Únited states of America')
map.set('FR', 'France')

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// in terms of object, for of loop is not valid as objects are not iterable by for of loop

//for...of Loop
// The for...of loop iterates over the values of iterable objects such as arrays, strings, maps, sets, or custom iterables.
// Key Features:
// Iterates over values directly.
// Best suited for arrays, strings, and iterable objects.
// Does not work with objects unless they are explicitly made iterable.

