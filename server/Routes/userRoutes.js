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
            res.status(201).json({
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
    const keyword=req.query.search?{
        $or:[
            {name:{$regex:req.query.search,$options:"i"}},
            {email:{$regex:req.query.search,$options:"i"}},
        ]
    }:{};

    const users=await User.find(keyword).find({_id:{$ne:req.body._id}})
    res.send(users)
    console.log(keyword);
})

router.post("/fetchChat",jsonParser,async(req,res)=>{
     const curruser=req.body.curruser 
     const userid=req.body.userid
     const chat=await Chat.find({
        GroupChat:false,
        $and:[
            {users:{$elemmatch:{$eq:userid}}},
            {users:{$elemmatch:{$eq:curruser}}}
        ]
     }).populate("users","-password")
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