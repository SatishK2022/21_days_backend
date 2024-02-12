function hello() {
    let name = "Satish"
    console.log(name);
}

// hello();

function outerFn() {
    let outerVar = "I am from outer function";
    function innerFn() {
        console.log(outerVar);
    }
    return innerFn;
}

let fn = outerFn()
fn()


function customCounter() {
    let count = 0;
    return function () {
        count++;
        console.log("New custom counter is ", count);
    }
}

let counter = customCounter()
counter()
counter()
