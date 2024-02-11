arr = [1, 2, 3, 4]
// console.log(typeof arr)

arr1 = new Array(1, 2, 3, 4)
// console.log(typeof arr1)
// console.log(arr1)

let array = [1, 4, 6, 7, 9, 11, 13, 35, 53, 45, 34, 23, 54]
// console.log(array[0])
// console.log(array[5])
// console.log(array[20])

// array are mutable, we can modify it

array[0] = 10
// console.log(array)

// Insert element inside array
arr.push(5)
arr.push(6, 7, 8)
// console.log(arr)

// unshift : add in the starting
arr.unshift(555)
// console.log(arr)

// Removing element inside array
num = [1, 2, 3, 4, 5]

num.pop()
// console.log(num)

// shift : remove in the starting
num.shift()
// console.log(num)

// concat
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]

let result = a1.concat(a2)
console.log(result)

// length of array

console.log(a1.length)

// Convert array into string
let charArray = ['S', 'a', 't', 'i', 's', 'h', ' ', 'K', 'u', 'm', 'a', 'r']
let str = charArray.join("")
console.log(str)

console.log(typeof charArray.toString())