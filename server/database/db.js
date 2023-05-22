const mongoose=require('mongoose')
const url="mongodb://alimalik:ali@ac-jrlq8ft-shard-00-00.nfpza2z.mongodb.net:27017,ac-jrlq8ft-shard-00-01.nfpza2z.mongodb.net:27017,ac-jrlq8ft-shard-00-02.nfpza2z.mongodb.net:27017/ChatApp?ssl=true&replicaSet=atlas-nzo5s8-shard-0&authSource=admin&retryWrites=true&w=majority"
const connect=async()=>{
    
    mongoose.set("strictQuery", false)
    datab="mongodb://alimalik:ali@ac-jrlq8ft-shard-00-00.nfpza2z.mongodb.net:27017,ac-jrlq8ft-shard-00-01.nfpza2z.mongodb.net:27017,ac-jrlq8ft-shard-00-02.nfpza2z.mongodb.net:27017/ChatApp?ssl=true&replicaSet=atlas-nzo5s8-shard-0&authSource=admin&retryWrites=true&w=majority"
    await mongoose.connect(datab,{useNewUrlParser:true,useUnifiedTopology:true}, async (err,result) => {
        console.log("connected");
})}
module.exports=connect