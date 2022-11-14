const express = require('express')
const { SignUp, SignIn, updateProfile, deleteProfile, getOneProfile, getProfiles } = require('../Controllers/User')
const { isAuth } = require('../Middlewares/isAuth')
const { registerValidation, Validation, logValidation } = require('../Middlewares/RegisterValidator')




const userRouter = express.Router()


userRouter.post('/SignUp',registerValidation,Validation,SignUp)

userRouter.post('/SignIn',logValidation,SignIn)

userRouter.get('/User', isAuth,(req,res)=>res.send(req.user))

userRouter.get('/getProfiles',getProfiles)

userRouter.get('/getOneProfile/:id',getOneProfile)

userRouter.delete('/deleteProfile/:id',deleteProfile)

userRouter.put('/updateProfile/:id',updateProfile)


module.exports = userRouter