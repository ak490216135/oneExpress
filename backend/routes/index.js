var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //req.session.username = 'ak_490216135';//写入至session
    if( typeof(req.session.username) == 'undefined' ){
        console.log('未登录');
        // 跳转
        res.redirect('/login');
    }else{
        console.log('已登录:' + req.session.username);
    }
    res.render('index', { title: '欢迎访问学生管理系统后台' });
});

module.exports = router;
