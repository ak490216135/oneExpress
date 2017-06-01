var sql = {
    student: {
        insert: 'INSERT INTO `student`.`student`(`name`, `birth`, `sex`, `description`) VALUES (?, ?, ?, ?)',
        selectOne: 'SELECT * FROM `student` WHERE `id` = ? ORDER BY id DESC LIMIT 1',
        selectPage: 'SELECT * FROM `student` WHERE 1 ORDER BY id DESC LIMIT ? , ?',
        selectAll: 'SELECT * FROM `student`',
        deleteOne: 'DELETE  FROM `student` WHERE `id` = ?',
        deleteMore: 'DELETE  FROM `student` WHERE `id` in (?)'
    }
};

module.exports = sql;