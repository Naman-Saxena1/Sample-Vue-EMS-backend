const express = require('express')
const router = express.Router();
const Employee = require('../models/Employee')

router.post('/', async (req,res)=>{
    const {
        name,
        age,
        empid,
        designation,
        yearsOfExperience,
        skills
    } = req.body

    try 
    {
        await Employee.employeeModel.create(
        {
            name: name,
            empid: empid,
            age: age,
            designation: designation,
            yearsOfExperience: yearsOfExperience,
            skills: skills
        })

        res.json({status:'ok'})
    }
    catch(err) {
        res.json({status:'error',error:err})
    }
})

module.exports = router;