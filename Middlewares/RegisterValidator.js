const { body, validationResult } = require('express-validator');

exports.registerValidation = [
    body('name',"Name must at least contain 4 characters or more").isLength({min : 4}),
    body('lastName',"Last name must at least contain 2 characters or more").isLength({min : 2}),
    body('email',"Please enter a valid Email").isEmail(),
    // body('password',"Weak Password").isStrongPassword(),
    body('password',"Password must at least contain 8 characters or more").isLength({min : 8})

]

exports.logValidation = [
    body('email',"Please enter valid Email").isEmail()
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}


