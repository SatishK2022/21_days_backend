// async function getMessage() {
//     return "Hello Everyone"
// }

// getMessage().then(message => {
//     console.log(message)
// })


// Print hello after a wait

// function printHello() {
//     console.log("First Line")
//     setTimeout(() => {
//         console.log("Hello")
//     }, 2000)
//     console.log("Last Line")
// }


console.log("Hello From beginning")
async function printHello() {
    console.log("First Line")

    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello")
        }, 2000)
    })

    let result = await data // start wating for the data promise to be completed
    console.log(result)
    console.log("Last Line")
}

printHello()

console.log("Hello From the end")