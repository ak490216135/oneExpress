var express = require('express');
var router = express.Router();
var access = require('../routes/access');

router.use(access);

/* GET home page. */
router.get('/', function(req, res, next) {

    // 判断是否已经登陆成功
    if( typeof(req.session.user_id) == 'undefined' ){
        console.log('未登录');
        res.redirect('/login');
    }else{
        console.log('已登录:' + req.session.user_username);
    }

    res.render('index',
        {
            title: '欢迎访问学生管理系统后台',
            session_info: {
                user_id: req.session.user_id,
                user_name: req.session.user_name,
                user_username: req.session.user_username
            }
        }
    );
});

module.exports = router;
