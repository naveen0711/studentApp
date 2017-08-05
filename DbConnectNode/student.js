const mongoose = require('mongoose');

//Definig schema
const studentSchema = mongoose.Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    RollNumber: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('students',studentSchema);