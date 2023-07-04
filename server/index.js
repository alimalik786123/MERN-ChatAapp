const express=require("express")
const dotenv=require('dotenv')
const app=express()
const mongo=require('./database/db')
userRoutes=require('./Routes/userRoutes')
  
mongo()
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
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
    socket.on("setup",(user)=>{
        socket.join(user)
        socket.emit('connected')
    })
    
    socket.on("join chat",(msg)=>{
      socket.join(msg)
      console.log(msg,'user joined room');
      
  })
    
  socket.on("newmessage",(data1)=>{   

    
    
      socket.in(data1.userid).emit("message recieved",{msg:data1.msg,userid:data1.userid,chatid:data1.data._id})
      console.log(data1,'hellouser');
      console.log('sent to this userid',data1.userid)
    

  })

    socket.on("typing",(data)=>{  

      socket.in(data.chatid).emit('typing',data.chatid)
      

    })

    socket.on("notyping",(data)=>{
      socket.in(data.msg).emit('notyping')
    })

    socket.on("notyping",(id)=>{
      console.log(id);
    })


  })
  