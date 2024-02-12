// forEach method
let players = ["Sachin", "Rohit", "Virat", "Dhoni"]

players.forEach((player) => console.log(player))

// map method : Creation of new transformed array

let array = [1, 2, 3, 4, 5]
let cubeArr = array.map(num => num ** 3)

// console.log(cubeArr)
// console.log(array)

// filter method
let arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 10]

let evenNums = arr1.filter(num => num % 2 == 0)
console.log(evenNums)

// reduce method
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arr2.reduce((prev, curr) => prev + curr)
console.log(sum)