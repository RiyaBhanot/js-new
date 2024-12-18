
var c = 300
let a = 350
const d =450
if(true){
    let a = 400
    var c = 350
    const d = 600
}

console.log(a)
console.log(d)
console.log(c)

//var:
// Function-scoped. A variable declared with var is accessible within the entire function it's declared in, regardless of block scope.
// let:
// Block-scoped. A variable declared with let is only accessible within the block it's declared in (e.g., inside a loop or an if statement).
// Redeclaration:
// var: Can be redeclared within the same scope.
// let: Cannot be redeclared within the same scope.

// function example() {
//     if (true) {
//       var x = 10; // Function-scoped
//       let y = 20; // Block-scoped
//     }
  
//     console.log(x); // Outputs 10 (accessible)
//     console.log(y); // Error (not accessible outside the block)
//   }

