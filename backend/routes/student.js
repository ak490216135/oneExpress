var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../model/config');
var connection = mysql.createConnection(config.mysql);

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.connect();
    var sql = 'SELECT * FROM `student` WHERE 1 ORDER BY id DESC LIMIT ? , ?';
    var param = [
        0,
        10
    ];
    connection.query(
        sql,
        param,
        function (err, result) {
            if(result.length >= 1){
                res.render(
                    'student/index',
                    {
                        title: '学生管理',
                        href: '/student',
                        num: result.length,
                        data: result
                    }
                );
            }
        }
    );
    connection.end();
});

router.get('/add', function(req, res, next) {
    res.render('student/add', { title: '学生添加' });
});
router.post('/add', function(req, res, next) {
    connection.connect();
    var sql = 'INSERT INTO `student`.`student`(`name`, `birth`, `sex`, `description`) VALUES (?, ?, ?, ?)';
    var param = [
        req.body.name,
        req.body.brith,
        req.body.sex,
        req.body.description
    ];
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