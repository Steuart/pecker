const express = require('express');
const db = require('../comm/nedb').getDb();
const router = express.Router();
let test = require("../service/testService");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/test',(req,res,next)=>{
    test.getData(res);
});

router.get('/login',(req,res,next)=>{
    res.render('login',{});
});

router.get('/home',(req,res,next)=>{
    res.render('home',{});
});

module.exports = router;
