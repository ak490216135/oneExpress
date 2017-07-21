var access = function timeLog(req, res, next) {
    // 获取session信息
    console.log( '----------------------------------------' );
    console.log( '当前用户 : ' + req.session.user_username );
    console.log('TIME: ', Date.now());
    console.log( '----------------------------------------' );
    next();
}

module.exports = access;