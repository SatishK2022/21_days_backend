const fs = require('fs');

// Read from an external file

/*
// Read in sync way
console.log("Before Reading\n")

// const content = fs.readFileSync('input.txt');

// Reading in async way
fs.readFile('input.txt', (err, content) => {
    if (err) {
        console.log("Error: ", err)
    }

    console.log("Content: \n"+ content)
})

console.log("\nAfter Reading")
*/


// Write to an external file
console.log("Befor Writing")

// fs.writeFileSync('output.txt', "Hello Everyon,\nI am Satish Kuamar. I am currentyly learning the backend.")
fs.writeFile('output1.txt', "Hello Everyon, \nI am Satish Kuamar. I am currentyly learning the backend.", (err) => {
    if (err) {
        console.log("Error: ", err)
    }
    console.log("Written in the file")
})

console.log("After Writing")