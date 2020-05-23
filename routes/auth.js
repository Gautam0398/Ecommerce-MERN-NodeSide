const express = require('express');
const router = express.Router()

const { signin,signup,signout, requireSignin } = require('../controllers/auth');
const { userSignupValidator} = require('../validator')


router.get('/',(req,res)=>{
    res.end('user Template boiler plate');
});

router.post('/signup',userSignupValidator,signup);
router.post('/signin',signin);
router.get('/signout',signout);



module.exports = router;
