const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config();
const PORT = process.env.PORT || 8003;
const cors = require("cors")
const { connectToMongoose } = require('./connection/connection')
const router = require('./router/router')

const app = express()

// Middle ware 
app.use(cors())
app.use(express.json())


// Connect to mongoDb 
connectToMongoose(process.env.MONGODB_URI)
.then(() => console.log("Server is connect to mongoDB"))
.catch((err) => console.log(err))

// Router
app.use('/' ,router)



// Listen to port
app.listen(PORT , () =>{
    console.log("Server is running ")
})