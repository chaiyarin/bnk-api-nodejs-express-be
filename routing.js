const memberService = require('./member.service');
const userService = require('./user.service');

module.exports = (app) => {
    app.post('/api/save', (req, res) => {
        memberService.saveMember(req.body, res);
    });

    app.get('/api/get-members', (req, res) => {
        memberService.getMembers(res);
    });

    app.get('/bnk/members', memberService.getMembers)
    app.get('/bnk/members/:id', memberService.getMember)
    app.patch('/bnk/members/:id', memberService.updateMember)
    app.get('/seed-member', memberService.seedData)
    app.post('/createUser', userService.createUser)
    app.post('/auth/login', userService.login)
};