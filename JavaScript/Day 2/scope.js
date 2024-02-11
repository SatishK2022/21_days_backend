/*
Scope are of three types:-
1. Global Scope
2. Function Scope
3. Block Scope
*/

// # Global Scope
var name = "Satish"

function printName() {
    console.log(name)
}

// printName()


// Local Scope or Function Scope
var printNumber = () => {
    var num = 25
    console.log(num)
}

// printNumber()
// console.log(num)


// Block Scope
{
    let myName = "satish"
    console.log(myName)
}

console.log(myName)