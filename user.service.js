var User = require('./user');
var jsonWebToken = require('jsonwebtoken');

module.exports.login = function (req, res) {
    User.find({
        login: req.body.login
    }, (err, result) => {
        const userData = result[0];
        if(err){
            res.status(500);
            res.json(err);
        }else{
            if(userData.password == req.body.password){
                const token = jsonWebToken.sign({ name: userData.login, id: userData._id }, 'beer', { expiresIn: 3600 })
                res.json({token: token});
            }
        }
    })
}

module.exports.createUser = function (req, res) {
    User.create({
        login: req.body.login,
        password: req.body.password,
        display: req.body.display,
        email: req.body.email
    }, (err, result) => {
        if(err) {
            res.status(500);
            res.json({error_message: 'Cannot Create New User'});
        }else{
            res.json({message: 'Create User Successfully'})
        }
    });
}