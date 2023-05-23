const mongoose=require("mongoose")
const usermodel=mongoose.Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    },
    img:{
        type:String,
        default:"https://cdn141.picsart.com/357697367045201.jpg"
    },
},{timestamps:true})
const User=mongoose.model("User",usermodel)
module.exports=User