const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
require('./routing')(app);
var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on PORT 3000!'));
