require("dotenv").config();
require("./config/db");
const express = require("express");
const app = express();
const passport = require("passport");
const path = require("path");
const expressSession = require('express-session');
const router = require('./routes/index');
const { notFound } = require('./middleware/errorHandler');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

require('./config/passport')(passport);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(expressSession({

    secret: process.env.secret,
    resave: false,
    saveUninitialized: false

}));

app.use(express.json({ limit: "1024mb" }));
app.use(express.urlencoded({ limit: "1024mb", extended: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(flash());

app.use(router);

app.use(notFound);

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server started successful on port ${port}`));