const mongoose = require('mongoose')

const Employee = new mongoose.Schema(
    {
        name : {type: String, required: true},
        empid: {type: String, required: true, unique: true},
        age  : {type: Number},
        designation : {type: String},
        yearsOfExperience : {type: String},
        skills : [{type: String}]
    }
)

const employeeModel = mongoose.model('employee_data', Employee)

module.exports = { employeeModel }