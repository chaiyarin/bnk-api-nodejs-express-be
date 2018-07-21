var mongoose = require('./mongoose');
var schema  = new mongoose.Schema({
    login: String,
    password: String,
    display: String,
    email: String
},{
    versionKey: false
});
module.exports = mongoose.model('users', schema);