// function with no argument and no return
var sayHello = () => console.log("Hello");

// sayHello();

// function with parameter and return
var sum = (a, b) => a + b

// console.log(sum(2, 4))

// function with parameters, multiple line of fn body

var process = (a, b) => {
    var result = a + b;
    // console.log(arguments) // not have the access of the argument object
    return result;
}

// console.log(process(2, 4))

(function () {
    console.log("Hello Everyone")
})()