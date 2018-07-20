const express = require('express');
const cors = require('cors');
const app = express();
require('./routing')(app);
app.use(cors());
var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on PORT 3000!'))
