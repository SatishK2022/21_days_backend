function greet(name, callback) {
    const greeting = `Hello ${name}`;
    callback(greeting);
}

function displayGreeting(greeting) {
    console.log(greeting);
}

greet("Satish", displayGreeting)

// Callback hell | Pyramid of doom

fetchRandomJokes((joke) => {
    console.log(joke);

    translatedJoke(joke, (translatedJoke) => {
        console.log(translatedJoke)

        postJoke(translatedJoke, () => {
            console.log("Joke posted successfully !!")
        })
    })
})