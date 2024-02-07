var num = 20

if (num % 2 == 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

// ternary operator
num % 2 == 0 ? console.log("Even") : console.log("Odd")

var fruit = "Apple"

switch (fruit) {
    case "Apple":
        console.log("It's an Apple")
        break;

    case "Banana":
        console.log("It's a Banana")
        break;

    default:
        console.log("Not a Valid Fruit")
        break;
}