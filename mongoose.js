var mongoose = require('mongoose');
var urlMongo = `mongodb://${process.env.BNK_MONGO_USERNAME}:${process.env.BNK_MONGO_PASSWORD}@${process.env.BNK_MONGO_HOST}:${process.env.BNK_MONGO_PORT}/${process.env.BNK_MONGO_DB_NAME}`;
mongoose.connect(urlMongo, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo Connected');
});
module.exports = mongoose;