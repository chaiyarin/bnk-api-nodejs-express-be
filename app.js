const express = require('express');
const cors = require('cors');
const memberService = require('./member.service');
const app = express();
app.use(cors());
var port = process.env.PORT || 3000;

app.get('/api/save', (req, res) => {
    memberService.saveMember('ชัยรินทร์ เนียมสุวรรณ', 'คอนโดลุมพินี', res);
})

app.get('/api/get-members', (req, res) => {
    memberService.getMembers(res);
})

app.listen(port, () => console.log('Example app listening on PORT 3000!'))
