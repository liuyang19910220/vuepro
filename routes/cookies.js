var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Credentials', true);
  //兜库mysql|mongdb|代理http.request(...)
  req.session.nikename='bmw2';
  res.end("种完了");
});

module.exports = router;


/*
router.post('/reg', function(req, res, next) {
  // res.send('注册接受');
  let username=req.body['username'];
  let password=req.body['password'];
  let nikename=req.body['nikename'];
  let data={username,password,nikename};
  mongoCt.connect(address,(err,db)=>{
    let user = db.collection('user');
    user.find({username}).toArray((err,result)=>{
      if(err) throw err;
      if(result.length==0){
        user.insertOne(data,(err,result)=>{
          if(err) throw err;
          res.send('注册成功');
        });
      }else{
        res.send('用户名已存在');
        db.close();
      }
    });
  });
});
router.post('/login', function(req, res, next) {
  // res.send('注册接受');
  let username=req.body['username'];
  let password=req.body['password'];
  mongoCt.connect(address,(err,db)=>{
    let user = db.collection('user');
    user.find({username}).toArray((err,result)=>{
      if(err) throw err;
      if(result.length==0){
        res.send('用户名不存在');
      }else{
        if(result[0].password==password){
          req.session.nikename=result[0].nikename;
          res.redirect('/');
        }else{
          res.send('用户名或者密码有误');
        }
      }
    });
  });
});*/

