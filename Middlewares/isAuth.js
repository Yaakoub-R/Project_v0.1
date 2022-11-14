const jwt = require('jsonwebtoken')
const User = require('../Models/User')

exports.isAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token,process.env.PrivateKey)
        if(!decoded){return req.status(400).send({error : [{msg :'Not an authorized token'}]})}
        const user = await User.findById(decoded.id)
        req.user = user 
        next()
    } catch (error) {
        res.status(500).send({errors : [{msg : ' Not Authorized'}]})
    }

}