var Member = require('./member');

module.exports.saveMember = function (requestBody, response) {
    var collectionMember = new Member(requestBody);
    collectionMember.save(function (err, res) {
        response.json({status: true});
    });
};

module.exports.getMembers = function (response) {
    Member.find(function (err, result) {
        response.json(result);
    });
};