const mongoose = require('mongoose')

// Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 19
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 15
    },
    subjects: [String],
}, {versionKey: false, timestamps: true})

module.exports = mongoose.model("Student", studentSchema)