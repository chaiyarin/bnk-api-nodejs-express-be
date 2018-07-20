var Member = require('./member');

module.exports.saveMember = function (name, address, response) {
    var collectionMember = new Member({
        name: name,
        address: address
    });
    collectionMember.save(function (err, res) {
        response.json({status: true});
    });
};

module.exports.getMembers = function (response) {
    Member.find(function (err, result) {
        response.json(result);
    });
}