// Syntax related
// console.log("Hello)

// Runtime Error
// let x = 5
// console.log(x.toUpperCase())

// Logical Error
// let num = 5
// for(i = -3; i < 5; i++) {
//     console.log(num/i)
// }


try {
    let obj = {
        name: "Satish"
    }
    console.log(obj.name)
} catch (error) {
    console.log("Error: ", error)
} finally {
    console.log("I am always executed")
}