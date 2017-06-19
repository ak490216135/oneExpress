var sql = {
    student: {
        insert: 'INSERT INTO `student`.`student`(`name`, `birth`, `sex`, `description`, `create_date`) VALUES (?, ?, ?, ?, ?);',
        update: 'UPDATE `student` SET `name` = ?, `birth` = ?, `sex` = ?, `description` = ? WHERE `id` = ?;',
        selectOne: 'SELECT * FROM `student` WHERE `id` = ? ORDER BY id DESC LIMIT 1;',
        selectPage: 'SELECT * FROM `student` WHERE 1 ORDER BY id DESC LIMIT ? , ?;',
        selectAll: 'SELECT * FROM `student`;',
        selectCount: 'SELECT COUNT(*) AS `count` FROM `student`;',              // 使用别名解决 COUNT(*) 不能当作对象操作的问题
        deleteOne: 'DELETE  FROM `student` WHERE `id` = ?;',
        deleteMore: 'DELETE  FROM `student` WHERE `id` in (?);'
    },
    user: {
        //insert: 'INSERT INTO `student`.`student`(`name`, `birth`, `sex`, `description`, `create_date`) VALUES (?, ?, ?, ?, ?);',
        //update: 'UPDATE `student` SET `name` = ?, `birth` = ?, `sex` = ?, `description` = ? WHERE `id` = ?;',
        selectOne: 'SELECT * FROM `user` WHERE `username` = ? AND `password` = ? ORDER BY id DESC LIMIT 1;',
        //selectPage: 'SELECT * FROM `student` WHERE 1 ORDER BY id DESC LIMIT ? , ?;',
        selectAll: 'SELECT * FROM `user`;',
        //selectCount: 'SELECT COUNT(*) AS `count` FROM `student`;',              // 使用别名解决 COUNT(*) 不能当作对象操作的问题
        //deleteOne: 'DELETE  FROM `student` WHERE `id` = ?;',
        //deleteMore: 'DELETE  FROM `student` WHERE `id` in (?);'
    }
};

module.exports = sql;