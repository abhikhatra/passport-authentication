const express = require('express');
const router = express.Router();

const { checkAuthenticated } = require('../middleware/auth')

router.get('/main', checkAuthenticated, (req,res) => {
    const cookie = req.cookies
    console.log(cookie)
    const view = cookie.views ? + cookie.view +1:1

    res.cookie(`views`,view,{
        maxAge:500000,
        secure:true,
        httpOnly:true
    })
    res.render('main', { username:req.user?.username })
});

router.get('/set-cookies',checkAuthenticated, async (req,res) =>{
    req.logout()
    res.render('/login')
});

router.get('/set-cookies',checkAuthenticated, async (req,res) => {});

module.exports=router;