const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(
    `mongodb+srv://naman_saxena1998:${process.env.MONGODB_KEY}@vueemscluster.1wwjf8m.mongodb.net/vueems-cloud`,
    { useNewUrlParser : true},
    () => console.log('Connected to MongoDb Database')
)

app.use(cors())
app.options('*',cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const registerRoute = require('./routes/register')
app.use('/register',registerRoute)

const recordsRoute = require('./routes/records')
app.use('/records',recordsRoute)

app.listen( process.env.PORT || 1337, ()=>{
    console.log("Server started at port 1337!")
})