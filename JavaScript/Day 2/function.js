// Define a function

function helloStudents() {
    console.log("Hello Students !");
}

// helloStudents();

// I want to get the sum of two number
function sum(a, b = 5) {
    return a + b;
}

// console.log(sum(2))

function func() {
    console.log(arguments)  // It will return an arguments object
}

func(1, 2, 3, 4, 5, 6)

