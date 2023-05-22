const express=require("express")
const dotenv=require('dotenv')
const app=express()
const mongo=require('./database/db')

mongo()
app.get('/hello',(req,res)=>{
    res.send({data:"fine"})
})
app.listen(5000,console.log("server running")) 