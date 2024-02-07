/*
There are Two Types of DataTypes:-
1) Primitive DataType : Simple and Immutable
- String
- Number
- BigInt
- Null
- Undefined
- Boolean
- Symbol

2) Non-Primitive DataType : Complex and mutable
- Object
- Array
*/

// String
var name = "Satish"
var title = 'Kumar'
// console.log(name)
// console.log(typeof (name))

// Number
var age = 30
var pi = 3.14
// console.log(typeof pi)
// console.log(typeof NaN) // number

// BigInt
var BigInt = 123n
console.log(typeof BigInt)

// null
var a = null
// console.log(typeof a) // object


var user = {
    name: "Satish",
    email: "satish@gmail.com",
    age: 20
}

console.log(user)