// student
var mysql = require('mysql');
var config = require('../config/db');

var student = {
    insert: 'INSERT INTO `student`.`student`(`name`, `birth`, `sex`, `description`) VALUES (?, ?, ?, ?)',
    selectOne: 'SELECT * FROM `student` WHERE `id` = ? ORDER BY id DESC LIMIT 1',
    selectPage: 'SELECT * FROM `student` WHERE 1 ORDER BY id DESC LIMIT ? , ?',
    selectAll: 'select * from `student`'
};
var f = {
    selectAll: function(req, res, next){
        var connection = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query(
            student.selectAll,
            function (error, result, fields) {
                if (error) throw error;
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
        );
        connection.end();
    },
    selectPage: function(req, res, next){
        var connection = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query(
            student.selectPage,
            [0, 20],
            function (error, result, fields) {
                if (error) throw error;
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
        );
        connection.end();
    },
};

module.exports = f;