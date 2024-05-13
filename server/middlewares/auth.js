const { verify } = require("jsonwebtoken");

const auth = (req,res,next)=>{
    try {
        const accessToken = req.cookies.access_token;   
        if(!accessToken) return next({status:401,message:"Unauthenticated"});
        const {id,role}=verify(accessToken,process.env.SECRET_KEY)
        req.payolad = {id,role};
        next();
    } catch (stack) {
       next({status:401,message:"Unauthenticated",stack});
    }
    
}
const authadmin =   ()=>{
    if(req.payolad.role !== "admin") return next({status:403,message:"Unauthorized"});
    next();
}
module.exports = {auth,authadmin};