// String

let name = 'Satish'
let country = "India"

// console.log(name, country)
// console.log(typeof name)

// Accessing char based on index
// console.log(name[0])
// console.log(name[2])

// console.log(name[10])  // undefined

// String is immutable
name[0] = "M"
// console.log(name)

// # Methods of String
let str = "Hello World"

// length
// console.log("Length:", str.length)

let firstName = "Satish"
let lastName = " Kumar"

// console.log(firstName.concat(lastName))
// console.log(firstName + lastName)

// console.log(str.toUpperCase())
// console.log(str.toLocaleLowerCase())

// console.log(str.charAt(2))

// Slicing

// console.log(str)
// console.log(str.slice(2))
// console.log(str.slice(2, 5))
// console.log(str.slice(-5))
// console.log(str.slice(-5, -2))

// IndexOf
console.log(str.indexOf("l"))
console.log(str.indexOf("a")) // if the char is not present it will return -1

// trim
let myName = " Satish  "
console.log(name.trim())

// split
let sentence = "Javascript is Amazing Language"
console.log(sentence.split(" "))

// join
console.log(sentence.split(" ").join("-"))