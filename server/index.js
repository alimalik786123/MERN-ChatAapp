const express=require("express")
const dotenv=require('dotenv')
const app=express()
const mongo=require('./database/db')
userRoutes=require('./Routes/userRoutes')
 
mongo()
// app.use(express.json)
app.use('/',userRoutes)

app.listen(5000,console.log("server running")) 