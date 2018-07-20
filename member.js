var mongoose = require('./mongoose');
var schema = new mongoose.Schema({ name: 'string', address: 'string' });
module.exports = mongoose.model('members', schema);;