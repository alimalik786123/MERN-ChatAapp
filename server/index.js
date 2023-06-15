const express=require("express")
const dotenv=require('dotenv')
const app=express()
const mongo=require('./database/db')
userRoutes=require('./Routes/userRoutes')
 
mongo()
// app.use(express.json)
app.use('/',userRoutes)

const server=app.listen(8080,console.log("server running")) 
const io=require('socket.io')(server,{
    pingTimeout:600000,
    cors:{
      origin:"http://localhost:3000"
    },
  })
  io.on("connection",(socket)=>{
    console.log('connected to socket.io ');
    socket.on("chat",(payload)=>{
        console.log("it is payload");
        io.emit("chat",payload)
    })
  })
  