var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');
var sql = require('../config/sql');
var pool = mysql.createPool(db.mysql);

var time = function timeLog(req, res, next) {
    console.log('TIME: ', Date.now());
    next();
}

router.use(time);

/* GET home page. */
// 首页
var index = function(req, res, next) {
    pool.getConnection(function (err, connection) {
        var page_num = 10;
        var page = 0;
        if( typeof (req.params.p) == 'undefined' ){req.params.p = 1;}
        if (req.params.p <= 0){req.params.p = 1;}
        connection.query(
            sql.student.selectPage + sql.student.selectCount,
            [(req.params.p - 1) * 10,page_num],
            function (err, result) {
                if (err) throw err;
                if (req.params.p <= 1){
                    var left = 1;
                }else{
                    var left = req.params.p - 1;
                }
                if(req.params.p >= Math.ceil(result[1][0].count / page_num)){
                    var left = Math.ceil(result[1][0].count / page_num) - 1;
                    var right = Math.ceil(result[1][0].count / page_num);
                }else{
                    var right = Number(req.params.p) + 1;
                }
                res.render(
                    'student/index',
                    {
                        title: '学生管理',
                        href: '/student',
                        num: result[0].length,
                        page: {
                            left: left,
                            right: right,
                            p: req.params.p,
                            page: Math.ceil(result[1][0].count / page_num),
                            count: result[1][0].count
                        },
                        data: result[0]
                    }
                );
                connection.release(); // 释放连接
            }
        );
    });
};
router.get('/', index);
router.get('/p/:p', index);

// 单条展示
router.get('/show/:id', function(req, res, next) {
    pool.getConnection(function (err, connection) {
        var page_num = 10;
        connection.query(
            sql.student.selectOne,
            [req.params.id],
            function (err, result) {
                if (err) throw err;
                if(result.length === 1){
                    res.render(
                        'student/show',
                        {
                            title: '学生展示',
                            href: '/student',
                            data: result[0]
                        }
                    );
                }else{
                    res.render(
                        'jump',
                        {
                            title: '学生展示',
                            href: '/student',
                            info: '访问错误,点击返回'
                        }
                    );
                }
                connection.release(); // 释放连接
            }
        );
    });
});

// 添加页面
router.get('/add', function(req, res, next) {
    res.render('student/add', { title: '学生添加' });
});
// 添加数据接收
router.post('/add', function(req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query(
            sql.student.insert,
            [
                req.body.name,
                req.body.birth,
                req.body.sex,
                req.body.description,
                Date.now()
            ],
            function (err, result) {
                if (err) throw err;
                if(result.affectedRows === 1){
                    res.render(
                        'jump',
                        {
                            title: '学生添加',
                            href: '/student',
                            info: '添加成功,点击返回'
                        }
                    );
                }else{
                    res.render(
                        'jump',
                        {
                            title: '学生添加',
                            href: '/student/add',
                            info: '添加错误,点击返回'
                        }
                    );
                }
                connection.release(); // 释放连接
            }
        );
    });
});

// 编辑页面
router.get('/edit/:id', function(req, res, next) {
    pool.getConnection(function (err, connection) {
        var page_num = 10;
        connection.query(
            sql.student.selectOne,
            [req.params.id],
            function (err, result) {
                if (err) throw err;
                if(result.length === 1){
                    res.render(
                        'student/edit',
                        {
                            title: '学生编辑',
                            href: '/student',
                            data: result[0]
                        }
                    );
                }else{
                    res.render(
                        'jump',
                        {
                            title: '学生编辑',
                            href: '/student',
                            info: '访问错误,点击返回'
                        }
                    );
                }
                connection.release(); // 释放连接
            }
        );
    });
});
// 编辑数据接收
router.post('/edit', function(req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query(
            sql.student.update,
            [
                req.body.name,
                req.body.birth,
                req.body.sex,
                req.body.description,
                req.body.id
            ],
            function (err, result) {
                if (err) throw err;
                if(result.affectedRows === 1){
                    res.render(
                        'jump',
                        {
                            title: '学生编辑',
                            href: '/student/edit/' + req.body.id,
                            info: '编辑成功,点击返回'
                        }
                    );
                }else{
                    res.render(
                        'jump',
                        {
                            title: '学生编辑',
                            href: '/student/edit/' + req.body.id,
                            info: '编辑错误,点击返回'
                        }
                    );
                }
                connection.release(); // 释放连接
            }
        );
    });
});

// 删除
router.get('/del/:id', function(req, res, next) {
    pool.getConnection(function (err, connection) {
        var page_num = 10;
        connection.query(
            sql.student.deleteOne,
            [req.params.id],
            function (err, result) {
                console.log(result);
                if (err) throw err;
                if(result.affectedRows === 1){
                    res.render(
                        'jump',
                        {
                            title: '学生删除',
                            href: '/student',
                            info: '删除成功,点击返回'
                        }
                    );
                }else{
                    res.render(
                        'jump',
                        {
                            title: '学生删除',
                            href: '/student',
                            info: '访问错误,点击返回'
                        }
                    );
                }
                connection.release(); // 释放连接
            }
        );
    });
});

module.exports = router;
