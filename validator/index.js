exports.userSignupValidator = (req,res,next)=> {
    req.check('name', 'Name is required').notEmpty()
    req.check('email', 'Email must be between 3 to 50 charaters').matches(/.+\@.+..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4,
        max: 50
    });

    req.check('password','Password is required').notEmpty()
    req.check('password')
    .isLength({min:6})
    .withMessage('Password must contain at Least 6 charcters')
    .matches(/\d/)
    .withMessage("password must contain a number");


    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error : firstError });
    }
    next();
}