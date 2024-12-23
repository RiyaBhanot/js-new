//for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log("5 is the best number")
//     }
//     console.log(i)
// }

//nested for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(i + '*' + j +'=' + i*j);
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

//array in for loop
let myarr = ["flash", "batman", "riya", "nrki"]
console.log(myarr.length)
for (let i = 0; i < myarr.length; i++) {
    console.log(myarr[i])
}

//here the length of the array is 4
//if i write i<arr.length then it will also print undefined with the other elements because in js we dont have out of bound error
//for Loop Condition (i <= myarr.length):
// The loop runs as long as i is less than or equal to myarr.length.
// When i equals 4 (the value of myarr.length), the code tries to access myarr[4].
// Accessing myarr[4]:

// Array indices in JavaScript are zero-based.
// Valid indices for myarr are 0, 1, 2, 3.
// myarr[4] does not exist, so it returns undefined.
//for (let i = 0; i <= myarr.length; i++)
//this will print
// flash
// batman
// riya
// nrki
// undefined



//******break and continue in for loop
//In JavaScript, break and continue are control flow statements used within loops to alter their execution.

//***break statement *****//
//The break statement is used to exit a loop or a switch statement entirely. 
// Once encountered, the loop or the switch ends immediately, and the program continues with the next statement after the loop or switch.

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is detected")
        break
    }
    console.log(`value of i is : ${i}`)
}

//**** continue statement ****//
// The continue statement is used to skip the current iteration of a loop and move to the next iteration. 
// It doesn’t terminate the loop but prevents the remaining code in the loop's body from executing for the current iteration.

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is detected")
        continue
    }
    console.log(`value of i is : ${i}`)
}
