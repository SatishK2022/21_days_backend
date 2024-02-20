const mongoose = require('mongoose')
const studentModel = require('./models/student.model1')

// Connect with mongodb
mongoose.connect('mongodb://localhost:27017/be_demodb')
.then(() => {
    console.log("✅ Connected to MongoDB")
    init()
    dbQueries()
})
.catch((err) => {
    console.log("❌ Error Connecting DB :", err)
})

/* 
const db = mongoose.connection // start the connection with mongoDB

// When error occurs
db.on("error", () => {
    console.log("Error while connecting to DB")
})

// When it is successful
db.once("open", () => {
    console.log("Connected to MongoDB")
    // Logic to insert the data in the DB
    init()

    // Read the data from the DB
    dbQueries()
})
*/

async function init() {
    const student = {
        name: "Satish Kumar",
        age: 20,
        email: "satish@gmail.com",
        subjects: ["Maths", "Software Engineering", "English"]
    }

    // const std_obj = await studentModel.create(student)
    // console.log(std_obj)
}

async function dbQueries() {
    // Read the student data
    console.log("Inside the dbQueries function")

    // Read the data based on id
    try {
        const student = await studentModel.findById('65d43fda35458221c855af75')
        console.log(student)
    } catch (error) {
        console.log("Error Reading Data: ", error);
    }

    // Search based on the name
    try {
        const students = await studentModel.find({name: "Satish"})
        // const students = await studentModel.findOne({email: "satish@gmail.com"})
        // const students = await studentModel.find()
        console.log(students)
    } catch (error) {
        console.log("Error Reading Data: ", error);
    }

    // Deal with the multiple conditions
    const stds = await studentModel.where("age").gt("10").where("name").equals("Satish Kumar").limit(2)
    console.log(stds)

    // Delete a document where name = "Satish Kumar"
    const deletedStudent = await studentModel.deleteOne({name: "Satish Kumar"})
    console.log(deletedStudent)
}