const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/hello') {
        res.end('Hello World');
    } else {
        res.end('Not Found');
    }
})

server.listen(5000, () => {
    console.log("App is Listening on http://localhost:5000")
})