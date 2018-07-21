var Member = require('./member');

module.exports.saveMember = function (requestBody, response) {
    var collectionMember = new Member(requestBody);
    collectionMember.save(function (err, res) {
        response.json({status: true});
    });
};

module.exports.getMembers = function (req, res) {
    Member.find(function (err, result) {
        res.json(result);
    });
};

module.exports.getMember = function (req, res) {
    Member.findOne({_id: req.params.id}, (err, result) => {
        res.json(result);
    });
}

module.exports.updateMember = function (req, res) {
    var memberModel = {
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        instagramId: req.body.instagramId
    }
    Member.findOneAndUpdate({
        _id: req.params.id
    }, memberModel, (err, result) => {
        if(err){
            res.status(401);
            res.send({status: false});
        }
        res.send({status: true});
    })
}

module.exports.seedData = function (req, res) {
    var mockData = [
        {
            "_id" : "5b49815cc1fc42e1ee9c8283",
            "name" : "Cherprang dsfdsaf",
            "imgUrl" : "https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg",
            "instagramId" : "cherprang.bnk48official"
        },
        {
            "_id" : "5b49815cc1fc42e1ee9c8285",
            "name" : "Orn",
            "imgUrl" : "https://media-spiceee.net/uploads/content/image/1643617/large_3ec1f891-1a5c-4905-b298-4cb27667320c.jpg",
            "instagramId" : "orn.bnk48official"
        },
        {
            "_id" : "5b49815cc1fc42e1ee9c8287",
            "name" : "Music",
            "imgUrl" : "https://i.pinimg.com/736x/3a/3d/56/3a3d569c3186f168e30256b46095e8de.jpg",
            "instagramId" : "music.bnk48official"
        },
        {
            "_id" : "5b49815cc1fc42e1ee9c8289",
            "name" : "Pun",
            "imgUrl" : "https://i.pinimg.com/736x/cf/ed/05/cfed05907f9acbb70300dcb38b3eb1e2.jpg",
            "instagramId" : "pun.bnk48official"
        },
        {
            "_id" : "5b49815cc1fc42e1ee9c828b",
            "name" : "Mobile",
            "imgUrl" : "https://lifestyle.campus-star.com/app/uploads/2018/01/Mobile-BNK48-4.jpg",
            "instagramId" : "mobile.bnk48official"
        },
        {
            "_id" : "5b49815cc1fc42e1ee9c828d",
            "name" : "Jennis",
            "imgUrl" : "https://themomentum.co/wp-content/uploads/2018/01/TheMomentum-Jennis-Cover-1.png",
            "instagramId" : "jennis.bnk48official"
        },
        {
            "_id" : "5b49815cc1fc42e1ee9c828f",
            "name" : "Mewnich",
            "imgUrl" : "https://thailandsuperstar.com/images/pix/7612703972/F_1779520031933369418.jpg",
            "instagramId" : "mewnich.bnk48official"
        }
    ];
    Member.insertMany(mockData, (err, result) => {
        res.json(result);
    });
}