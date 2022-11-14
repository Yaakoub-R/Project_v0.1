const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.SignUp = async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email}) 

        if(found){ res.send(400).send({errors : [{msg : 'Email already exist'}]})}

        const newUser = new User(req.body)

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)

        newUser.password = hash

        const payload={id : newUser._id}
        const token = jwt.sign(payload, process.env.PrivateKey)

        newUser.save()

        // res.status(200).send({msg : 'User registered successfully'})
        res.status(200).send({msg : 'User registered successfully',newUser,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not register'}]})
    }
} 

exports.SignIn = async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})
        if(!found){return res.send(400).send({errors : [{msg : 'Wrong Email'}]})}

        const match = await bcrypt.compare(password, found.password)
        if(!match) {return res.status(400).send({errors: [{msg : 'Wrong Password'}]})}

        const payload = {id: found}
        const token = jwt.sign(payload, process.env.PrivateKey)
        // const token = jwt.sign(payload, process.env.PrivateKey, { expiresIn: '24h'})

        res.status(200).send({msg: 'Login Successful',found,token})
        // res.status(200).send({msg: 'Login Successful'})
        
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not Login'}]})
    }
}

exports.getProfiles=async(req,res)=>{
    try {
        const profiles = await User.find()
        res.status(200).send({Msg:"List of Profiles",profiles})
    } catch (error) {
        res.status(500).send('Could not get Profiles')
    }
}

exports.getOneProfile=async(req,res)=>{
    const {id} = req.params
    try {
        const profile = await User.findById(id)
        res.status(200).send({Msg : 'Profile Found',profile})
    } catch (error) {
        res.status(500).send('Could not find Profile')
    }
}

exports.deleteProfile=async(req,res)=>{
    const {id} = req.params
    try {
        
        const deleteProfile = await User.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Profile deleted', deleteProfile})
    } catch (error) {
        res.status(500).send('Could not delete Profile')
    }
}

exports.updateProfile=async(req,res)=>{
    const {id} = req.params
    try {
        const updatedProfile = await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg :'Profile updated', updatedProfile})
    } catch (error) {
        res.status(500).send({Msg:'Could not update Profile'})
    }
    
}