const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
var port = process.env.PORT || 3000;

var MongoClient = require('mongodb').MongoClient;
var url = `mongodb://${process.env.BNK_MONGO_USERNAME}:${process.env.BNK_MONGO_PASSWORD}@${process.env.BNK_MONGO_HOST}:${process.env.BNK_MONGO_PORT}/${process.env.BNK_MONGO_DB_NAME}`;
var dbConnect = null;

console.log(url);

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  dbConnect = db.db("bnk");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbConnect.collection("member").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
})

app.listen(port, () => console.log('Example app listening on PORT 3000!'))
