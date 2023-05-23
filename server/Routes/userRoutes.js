const express=require('express')
const router=express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const jwt=require("jsonwebtoken")
const secret="mynameisalimalikmynameisalimalik"
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const User=require("../models/User")
const generateToken=require("./generateToken")
router.post("/user",jsonParser,async(req,res)=>{
    const {name,email,password,pic}=req.body
    if(!name||!email||!password){
        res.status(400);
    }
    else{
    const userExist=await User.findOne({"email":email}) 
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
            const token=jwt.sign(data,secret)
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

router.post("/user123",jsonParser, async (req, res) => {
        
        
            await User.create({
                name: req.body.name,      
                email: req.body.email,
                password:req.body.password



            })
            
            res.json({ success: true })
        
        // console.log(try1);
    })


module.exports=router