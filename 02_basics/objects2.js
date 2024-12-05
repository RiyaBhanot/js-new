//singleton object using literals
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser) 
//difference between this declaration and previous declaration is this that this gives singleton object and the previous one gives
// non-singleton object

///////******OBJECT NESTING ******/////////
const user = {                    /////////first object
    email : "riya@gmail.com",
    fullname:{                      /////////2nd
        userfullname:{             ////////3rd
            firstname: "Riya",
            lastname: "bhanot"
        }
    }
}

// console.log(user.fullname.userfullname.firstname) /////// we can access the nested objects by using this method of dot notation
//**********Optional Chaining *********//////////
//The optional chaining (?.) operator accesses an object's property or calls a function. 
//If the object accessed or function called using this operator is undefined or null, 
//the expression short circuits and evaluates to undefined instead of throwing an error.



////object merging
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2} //---- it just combine the objects but not showing them as single entity,just creates an another object which holds obj1 and obj2
// console.log(obj3)

// const obj4 = Object.assign(obj1,obj2) //combines them as single entity but advised to use the below syntax
const obj4 = Object.assign({},obj1,obj2) //--we use empty object in front of this because its syntax is as object.assign(target,source) ----
//so we provide target as an empty object to ensure that all the values should go into that empty object after combining and not in obj1 ---(object.assign(obj1,obj2))
//refer to mdn docs for this
//it is syntactically correct
// console.log(obj4)


////another method
//SPREAD METHOD

const obj5 = {...obj1,...obj2}
// console.log(obj5)


//whenever values are coming from database then they are in the form of array of objects so to access them we use below methods -----
const users = [
    {
        id:1,
        email: "v@riya.com"
    },
    {
        id:2,
        email:"r@v.com"
    },
    {
        id:3,
        email:"tofu@.com"
    }
]

//to access values from them we use
console.log(users[1].email) // this can access 1st value from the array of objects users[1] is the accessing method of array and .email is the accessing method of object
console.log(tinderUser) 

//now to access the keys of this object we use the below formula-----
console.log(Object.keys(tinderUser))
//it gives all the keys of tinderUser obj and the type of that keys will be array so it enables us to perform various methods on it like loop through....
console.log(Object.values(tinderUser)) // use to access the values from object
console.log(Object.entries(tinderUser)) // converts into array ,Each key-value pair is an array with two elements: the first element is the property key (which is always a string),
// and the second element is the property value.

//sometimes we want to check is the property or element exist in the object or not so to perform this, we use the below formula-----
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // gives value in boolean form -- gives true
console.log(tinderUser.hasOwnProperty('time')) //will gives false
