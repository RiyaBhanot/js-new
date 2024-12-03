let mydate = new Date()
// console.log(mydate) // gives output in unreadable format so to convert it into readable one we use the below methods

// console.log(mydate.toString()) //convert into a string shows time also
// console.log(mydate.toDateString()) // convert into a string but will only show date not the time
// console.log(mydate.toLocaleDateString()) // convert into a string but will only show date not the time by using slashes 02/07/23
// console.log(mydate.toLocaleString()) // convert into a string shows time also by using slashes
// console.log(mydate.toISOString()) // convert into ISO specified format
// console.log(typeof mydate)

let mycreatedDate = new Date(2023,0,4) // custom date // months are started from 0 in this because it is an array so it is taking values from 0
// console.log(mycreatedDate.toDateString())

let mycreatedDate1 = new Date("2023-01-14") // no need to take months from 0 because it is not an array
let mycreatedDate2 = new Date("01-14-2023") // can be printed in any format (MM-DD-YY)
// console.log(mycreatedDate1.toLocaleString())
// console.log(mycreatedDate2.toLocaleString())


let mycreatedDate3 = new Date(2023,0,4,5,30)
// console.log(mycreatedDate3.toLocaleString())

///////++++++++++++ TIME STAMPS +++++++++++/////////////
//majorly used whenever we creates quizzes or time bound test in which we have to declare the fastest one

let mytimestamp =  Date.now() //---- returns the number of milliseconds which is defined as the midnight at the beginning of January 1, 1970
// console.log(mytimestamp)
// console.log(mycreatedDate.getTime()) // can be used for camparison purposes
//if you want the desired results in seconds
// console.log(Math.floor(Date.now()/1000)) //---- we use floor method with this because we don't want decimal values

//// another methods
let newDate = new Date
console.log(newDate)
console.log(newDate.getMonth()+1) //---- added +1 because we know the month will start from 0 so not to confuse end user, we use this +1
console.log(newDate.getDay())

//we can also use string interpolation with this by using backticks and dollar with curly braces in which we can insert values into it
//`${newDate.getDay()} and the time is ${newDate.getTime()}`......

//// to customize the format of functions of the Date object such as LocaleString ----

newDate.toLocaleString('default',{
    weekday: "long"
})

