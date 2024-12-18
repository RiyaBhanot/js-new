const myArr = [0,1,2,3,5,"true","riya"]
//console.log(myArr[6])
// arrays are single objects that contain multiple values stored in a list.
//Items in an array are numbered, starting from zero. This number is called the item's index.
//  So the first item has index 0, the second has index 1, and so on. 
// You can access individual items in the array using bracket notation and supplying the item's index


//arrays are dynamic in js
// arrays in js create SHALLOW COPIES whenever array copy operations are used.
//SHALLOW COPY ---- copy whose properties share the same references (means any changes made in the copy will also affect the original array)(Heap memory)
//DEEP COPY ---- copy whose properties do not  share the same references (means any changes made in the copy will not affect the original array)(stack memory)

//another way of declaring arrays
const myarr1 = new Array(1,2,3,4,7,5,6,6)
//console.log(myarr1[9]) //----- if we are accessing the index which is not in the array then it gives output as undefined.
///////////////*********** Array Methods **************//////////////
 
myarr1.push(7) //// push element in the last
//console.log(myarr1);

myarr1.pop() //// pop out the  element in the last
//console.log(myarr1)

myarr1.unshift(5) // insert element at the starting  // generally not preferable or best practice because using this can results in shifting all the elements
//if say we have 1000 elements than shifting them cannot be a good practice // but this can be useful where we have to create TO-DO applications which
//require adding element at the starting

//console.log(myarr1)

myarr1.shift() // pop out the element at the starting
//console.log(myarr1)
 
//onsole.log(myarr1.includes(5)) // returns true (boolean value) if array includes the element else false

//console.log(myarr1.indexOf(5)) // gives index of the element
//console.log(myarr1.indexOf(9)) // returns -1 if element doesn't exist in the array

const newarr = myarr1.join() // converts array into string
// console.log(myarr1) //---- is an object
// console.log(newarr) //---- is an array

// console.log( typeof myarr1) 
// console.log( typeof newarr)


/////*******slice and splice ***********/////

console.log(myarr1.slice(2,5)) //// (start,end) // doesn't include last element and doesn't  make changes to the original array
console.log(myarr1)

console.log(myarr1.splice(2,5)) ////(start,ending count) // we have to count the elements upto given specified length //it manipulate the array and uses the method of cut paste
console.log(myarr1)
/////refer to mdn docs /////
console.log(typeof myArr)









