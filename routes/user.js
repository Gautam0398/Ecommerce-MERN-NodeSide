const express = require('express');
const router = express.Router()

const { userbyId, read, update, purchaseHistory } = require('../controllers/user');

const { requireSignin,isAdmin,isAuth } = require('../controllers/auth');


// router.get('/secret/:userId',requireSignin,isAuth,isAdmin,(req,res)=>{
//     res.json({
//         user : req.profile
//     });

// });

router.get('/user/:userId',requireSignin,isAuth,read);
router.put('/user/:userId',requireSignin,isAuth,update);
router.get('/order/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userbyId);

module.exports = router;
