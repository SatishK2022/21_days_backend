// destructuring in arrays
const num = [1, 2, 3]
const [a, b, c, d] = num

// console.log(a, b, c, d) // 1 2 3 undefined

const [x, y, z] = [1, 2, [3, 4, 5]]
// console.log(x, y, z) // 1 2 [ 3, 4, 5 ]

// destructuring in objects
const user = {
    name: "Satish",
    age: 20,
    city: "Delhi",
    country: "India"
}

// const { age, name, nationality } = user // The name should match with the keys of the object
// console.log(age, name, nationality) // 20 Satish undefined


const person = {
    name: "Satish",
    age: 20,
    address: {
        city: "Delhi",
        country: "India"
    }
}

const {name, age, address: {city, country}} = person
console.log(name, age, city, country) // Satish 20 Delhi India