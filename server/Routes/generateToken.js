const jwt=require('jsonwebtoken')
const secret="mynameisalimalikmynameisalimalik"  
const generateToken=(id)=>{
    return jwt.sign({id},secret)
}
module.exports=generateToken