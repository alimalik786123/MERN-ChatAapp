const mongoose=require('mongoose');
const chatModel=mongoose.Schema({
    chatName:{type:String, trim:true},
    // Groupchat:{
    //     type:Boolean,default:false 
    // },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    message:[{to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }}],
    content:[{
        user:String,
        message:String
    }]
    // groupAdmin:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User"
    // }
},{
    timestamps:true
})
const Chat=mongoose.model("Chat",chatModel)
module.exports=Chat