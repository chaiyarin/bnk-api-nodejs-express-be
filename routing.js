const memberService = require('./member.service');

module.exports = (app) => {
    app.get('/api/save', (req, res) => {
        memberService.saveMember('ชัยรินทร์ เนียมสุวรรณ', 'คอนโดลุมพินี', res);
    })

    app.get('/api/get-members', (req, res) => {
        memberService.getMembers(res);
    })
}