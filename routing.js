const memberService = require('./member.service');
var security = require('./security.middleware');

module.exports = (app) => {

    app.post('/api/save', (req, res) => {
        memberService.saveMember(req.body, res);
    });

    app.get('/api/get-members', security.authentication,  (req, res) => {
        memberService.getMembers(res);
    });

    app.use((err, req, res, next) => {
        res.status(err.code);
        res.send(err.data);
    });
};