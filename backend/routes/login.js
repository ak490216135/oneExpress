var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');
var sql = require('../config/sql');
var pool = mysql.createPool(db.mysql);
var access = require('../routes/access');

router.use(access);

router.get('/', function(req, res, next) {
    if( typeof(req.session.username) == 'undefined' ){
        console.log('未登录');
    }else{
        console.log('已登录:' + req.session.username);
    }
    res.render('login/index', { title: '登陆' });
});

router.post('/login', function(req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query(
            sql.user.selectOne,
            [req.body.username, req.body.password],
            function (err, result) {
                if (err) throw err;
                if(result.length === 1){
                    // 登陆成功
                    console.log('登陆成功');
                    req.session.user_id = result[0].id;//写入至session
                    req.session.user_name = result[0].name;//写入至session
                    req.session.user_username = result[0].username;//写入至session
                    res.redirect('/');
                }else{
                    // 登陆失败
                    console.log('登陆失败');
                    res.redirect('/login?status=0&info=用户名或密码错误');
                }
                connection.release(); // 释放连接
            }
        );
    });
});

router.get('/logout', function(req, res, next) {
    delete req.session.user_id;//写入至session
    delete req.session.user_name;//写入至session
    delete req.session.user_username;//写入至session
    res.redirect('/login/');
});

module.exports = router;
