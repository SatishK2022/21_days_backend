const express = require('express')
const app = express();

// See a req - res cycle
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Root"
    })
})


// Starting the express server
app.listen(8000, () => {
    console.log(`Server is listening on http://localhost:8000`)
})