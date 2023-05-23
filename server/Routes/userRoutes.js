const express=require('express')
const router=express.Router()

const User=require("../models/User")
router.post(async(req,res)=>{
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
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                pic:user.pic,
            })
        }
    }
}
});


module.exports=router