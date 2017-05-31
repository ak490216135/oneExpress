var express = require('express');
var router = express.Router();
var student = require('../model/student');

/* GET home page. */
router.get('/', function(req, res, next) {
    student.selectPage(req, res, next);
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
