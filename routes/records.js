const express = require('express')
const router = express.Router();
const Employee = require('../models/Employee')

router.get('/:empName', async (req,res)=>{
    try 
    {
        let allEmployees = await Employee.employeeModel.find(
        {
            name: req.params.empName
        })

        res.json({status:'ok',allEmployees: allEmployees})
    }
    catch(err) {
        res.json({status:'error',error:err})
    }
})

module.exports = router;