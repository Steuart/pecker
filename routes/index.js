const express = require('express');
const db = require('../comm/nedb').getDb();
const router = express.Router();
let test = require("../service/testService");

/* GET home page. */
/*router.get('/', function(req, res, next) {
    res.render('index.html', { title: 'Express' });
});*/

router.post('/test.do',(req,res,next)=>{
    test.getData(res);
});


module.exports = router;
