const jwt=require('jsonwebtoken')

const generateToken=(id)=>{
    return jwt.sign({id},secret)
}
module.exports=generateToken