// Define a schema of students collection to be stored in the DB

const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {timestamps: true})

module.exports =  mongoose.model("Student", studentSchema)