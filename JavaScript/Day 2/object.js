const user = {
    name: 'Satish',
    age: 20,
    country: "India"
}

// Accessing the value of object
// console.log(user.name);
// console.log(user['age'])

// Adding data to object
user.city = "Delhi"
user['continent'] = "Asia"
// console.log(user)

// Deleting object keys and object itself
delete user.city
// console.log(user)

delete user['continent']
// console.log(user)

let person = {
    name: "Satish",
    age: 20,
    address: {
        city: "New Delhi",
        state: "Delhi",
        country: "India"
    }
}

// for(let key in person){
//     console.log(key, person[key])
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))

// get both keys and values
// console.log(Object.entries(person))

// Cloning an object using assign
const newPerson = Object.assign({}, person)
// console.log(newPerson)

const newPerson1 = Object.assign({}, person, {role: "Developer"})
console.log(newPerson1)