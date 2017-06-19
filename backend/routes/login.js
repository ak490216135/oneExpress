var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');
var sql = require('../config/sql');
var pool = mysql.createPool(db.mysql);

/* 登陆页面 */
router.get('/', function(req, res, next) {
    if( typeof(req.session.username) == 'undefined' ){
        console.log('未登录');
    }else{
        console.log('已登录:' + req.session.username);
    }
    res.render('login/index', { title: '登陆' });
});

router.post('/login', function(req, res, next) {
    //console.log(req.body.username);
    //console.log(req.body.password);
    pool.getConnection(function (err, connection) {
        connection.query(
            sql.user.selectOne,
            [req.body.username, req.body.password],
            function (err, result) {
                if (err) throw err;
                if(result.length === 1){
                    // 登陆成功
                    console.log('登陆成功');
                }else{
                    // 登陆失败
                    console.log('登陆失败');
                    
                }
                connection.release(); // 释放连接
            }
        );
    });
    //req.session.username = 'ak_490216135';//写入至session
});

module.exports = router;
