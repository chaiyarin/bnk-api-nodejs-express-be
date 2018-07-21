var User = require('./user');
var jsonWebToken = require('jsonwebtoken');

module.exports.login = function (req, res) {
    User.find({
        login: req.body.login.toLowerCase()
    }, (err, result) => {
        if(err || !result.length){
            res.status(404);
            res.send('Username และ Password ของท่านไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง');
        }else{
            const userData = result[0];
            if(userData.password == req.body.password){
                const token = jsonWebToken.sign({ name: userData.login, id: userData._id }, 'beer', { expiresIn: 3600 })
                res.json({token: token});
            }
        }
    })
}

module.exports.createUser = function (req, res) {
    User.create({
        login: req.body.login.toLowerCase(),
        password: req.body.password,
        display: req.body.display,
        email: req.body.email.toLowerCase()
    }, (err, result) => {
        if(err) {
            res.status(500);
            res.send('ไม่สามารถสร้าง User ใหม่ได้กรุณาติดต่อผู้ดูแลระบบ');
        }else{
            res.json({message: 'Create User Successfully'})
        }
    });
}