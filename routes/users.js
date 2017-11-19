var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // console.log(req.headers);
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Credentials', true);
  //mysql||mongoDb  兜一圈
  res.send({name:'users页面'});//给你数据
});

module.exports = router;
