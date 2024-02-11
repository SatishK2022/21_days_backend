/*
var:-
    1. It is used to define a variable
    2. It is function scope not block scope
    3. It is hoisted
*/

function func1() {
    var a = 10;
    console.log(a)
}

// func1();
// console.log(a)

// {
//     var num = 20
// }
// console.log(num)


// console.log(name)
// var name = "satish"

/*
let:-
    1. It is used to define a variable
    2. It is block scope
    3. It is not hoisted
*/

// console.log(name)
// let name = "satish"

// {
//     let name = "ramesh"
// }
// console.log(name)

/*
const:-
    1. It is used to define a variable
    2. It is block scope
    3. It is not hoisted
    4. It is immutable, can't change it after initialization
*/

const country = "India"
console.log(country)
// country = "USA"