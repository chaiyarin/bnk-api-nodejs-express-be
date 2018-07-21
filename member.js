var mongoose = require('./mongoose');
var schema = new mongoose.Schema(
    {
        name: 'string',
        imgUrl: 'string',
        instagramId: 'string'
    },{
        versionKey: false
    }
);
module.exports = mongoose.model('members', schema);