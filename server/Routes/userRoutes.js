const express=require('express')
const router=express.Router()
var bodyParser = require('body-parser') 
var jsonParser = bodyParser.json()
const jwt=require("jsonwebtoken")
const secret="mynameisalimalikmynameisalimalik"
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Chat=require("../models/Chatmodel")
const User=require("../models/User")
const generateToken=require("./generateToken")
const { findOne } = require('../models/User')
router.post("/user123",jsonParser,async(req,res)=>{
    const {name,email,password,pic}=req.body
    if(!name||!email||!password){
        res.status(400);
    }
    else{
    const userExist=await User.findOne({"email":req.body.email}) 
    if(userExist){
        res.status(400);
    }
    else{
       const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            pic:req.body.name.pic,
        });
        if(user){
            const token=jwt.sign(user._id,secret)
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email, 
                pic:user.pic,
                token:generateToken(user._id)
            }) 
        }
    }
}
});

router.post("/user",jsonParser, async (req, res) => {
        
        
           const user= await User.create({ 
                name: req.body.name,       
                email: req.body.email,
                password:req.body.password, 
                img:req.body.pic
 


            })
            return res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email, 
                pic:user.img,
                token:generateToken(user._id)
            }) 
             
            // res.json({ success: true })
        
        // console.log(try1);
    })
router.post("/login",jsonParser,async(req,res)=>{
    const user=await User.findOne({"email":req.body.email})       
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email, 
            pic:user.pic,
            token:generateToken(user._id)
        })  
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})
router.post("/search",jsonParser,async(req,res)=>{  
    

    const users=await User.find({
        $or:[
            {name:{$regex:req.body.query,$options:"i"}},
            {email:{$regex:req.body.query,$options:"i"}},
        ]
    }).find({_id:{$ne:req.body.currid}})
    console.log(req.body.query);
    res.send(users)
   
})
 
router.post("/fetchChat",jsonParser,async(req,res)=>{
     const curruser=req.body.curruser 
     const userid=req.body.userid
     const chat=await Chat.findOne({
        
        // GroupChat:false,
        $and:[
            {users:{$elemMatch:{$eq:userid}}},
            {users:{$elemMatch:{$eq:curruser}}}
        ]
     })
     
     if(chat){
    
    res.send(chat)
     }
     else{
        const new1=await Chat.create({ 
            chatName:"newchat",
            users:[curruser,userid]
        })
        res.json([])
     }
})

router.post('/profiledata',jsonParser,async(req,res)=>{
    try {
        const id=req.body.id;
        const data1=await Chat.find({"users":{$elemMatch:{$eq:id}}})     
       res.send(data1)
    } catch (error) {     
        console.log(error); 
    }
})

router.post('/profileuserdata',jsonParser,async(req,res)=>{
    try {
        const id=req.body.id;
        const data1=await User.find({"_id":{$in:id}})  
       res.send(data1)
    } catch (error) {     
        console.log(error); 
    }
})

router.post("/message",jsonParser,async(req,res)=>{
    const message=await Chat.updateOne({ $and:[
        {users:{$elemMatch:{$eq:req.body.to}}},
        {users:{$elemMatch:{$eq:req.body.from}}}
    ]},{$push:{"message":{to:req.body.to,from:req.body.from,content:req.body.content}}}) 
    console.log(req.body.content);
    if(message){
        global.data=message
        res.send(message)
    }
})

router.post("/group",jsonParser,async(req,res)=>{
    
})

router.post("/rename",jsonParser,async(req,res)=>{
    
})

router.post("/groupremove",jsonParser,async(req,res)=>{
    
})

router.post("/groupadd",jsonParser,async(req,res)=>{
    
})

module.exports=router