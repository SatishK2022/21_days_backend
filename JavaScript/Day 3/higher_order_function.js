// Higher Order Funciton :- Higher order function is a function that either takes a function as an argument or returns a function.

function operation(operatorFn, a, b) {
    return operatorFn(a, b);
}

function add(a, b) {
    return a + b;
}

let result = operation(add, 10, 20);
// console.log(result)

function getGreetMethod() {
    return function (name) {
        console.log(`Hello ${name}`);
    }
}

let greet = getGreetMethod();
console.log(typeof greet)
greet("Satish");
