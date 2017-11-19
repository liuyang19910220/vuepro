var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
    // nikename:req.session.nikename
  });
});
/*router.get('/reg',function(req,res){
  res.render('reg.ejs',{
    title:'注册'
  });
});
router.get('/login',function(req,res){
  res.render('login.ejs',{
    title:'登录'
  });
});*/
module.exports = router;
