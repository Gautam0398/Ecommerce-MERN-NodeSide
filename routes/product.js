const express = require('express');
const router = express.Router()

const { create,
        productById,
        read,
        remove,
        update,
        list,
        listRelated,
        listCategories,
        listBySearch,
        listSearch,
        photo } = require('../controllers/product');

const { requireSignin,
        isAdmin,
        isAuth } = require('../controllers/auth');
const { userbyId } = require('../controllers/user');

/**
 * CRUD OPERATIONS ON PRODUCT
 */
router.post('/product/create/:userId',requireSignin,isAdmin,isAuth,create);
router.get('/product/:productId',read);
router.delete('/product/:productId/:userId',requireSignin,isAuth,isAdmin,remove);
router.put('/product/:productId/:userId',requireSignin,isAuth,isAdmin,update);


/**
 *  MISCELLANEOUS API's 
 */
router.get('/products',list);
router.get('/products/related/:productId',listRelated);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listBySearch);
router.get('/product/photo/:productId',photo);
router.get('/products/search', listSearch);

/**
 * Middleware for product id
 */
router.param('userId', userbyId);
router.param('productId',productById);

module.exports = router;
