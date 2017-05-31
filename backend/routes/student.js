var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');
var sql = require('../config/sql');
var pool = mysql.createPool(db.mysql);

/* GET home page. */
router.get('/', function(req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query(
            sql.student.selectPage,
            [0,10],
            function (err, result) {
                if (err) throw err;
                res.render(
                    'student/index',
                    {
                        title: '学生管理',
                        href: '/student',
                        num: result.length,
                        data: result
                    }
                );
                connection.release(); // 释放连接
            }
        );
    });
});

router.get('/add', function(req, res, next) {
    res.render('student/add', { title: '学生添加' });
});
router.post('/add', function(req, res, next) {
    var sql = 'INSERT INTO `student`.`student`(`name`, `birth`, `sex`, `description`) VALUES (?, ?, ?, ?)';
    var param = [
        req.body.name,
        req.body.brith,
        req.body.sex,
        req.body.description
    ];
    connection.connect();
    connection.query(
        sql,
        param,
        function (err, result) {
            console.log(result.affectedRows);
            if(result.affectedRows == 1){
                res.render(
                    'jump',
                    {
                        title: '学生添加',
                        href: '/student',
                        info: '添加成功,点击返回'
                    }
                );
            }
        }
    );
    connection.end();
});

module.exports = router;
