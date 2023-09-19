const express = require('express');
const router = express.Router();
const passport = require('passport');

const adminRoute = require('./adminRoute');
const authRoute = require("./authRoute")


router.use('/',authRoute)

router.use('/admin', adminRoute);

module.exports=router;