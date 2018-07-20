const memberService = require('./member.service');

module.exports = (app) => {
    app.post('/api/save', (req, res) => {
        memberService.saveMember(req.body, res);
    });

    app.get('/api/get-members', (req, res) => {
        memberService.getMembers(res);
    });
};