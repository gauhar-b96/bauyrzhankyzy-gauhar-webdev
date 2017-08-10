var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model('WebsiteModel', websiteSchema);
var userModel = require('../user/user.model.server');
module.exports = websiteModel;

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesByUser = findWebsitesByUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.deleteWebsite = deleteWebsite;


websiteModel.updateUser = updateUser;


function createWebsite(userId, website) {
    website._user = userId;
    var websiteTemp = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTemp = websiteDoc;
            return userModel.addWebsite(userId, websiteDoc._id);
        })
        .then(function (userDoc) {
            return websiteTemp;
        });
}

function findWebsitesByUser(userId) {
    return websiteModel
        .find({_user: userId})
        .populate('developer', 'username')
        .exec();
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);

}
// TODO: fix, controller etc.
function deleteWebsite(userId, websiteId) {
    return websiteModel
        .remove({_id:websiteId})
        .then(function (status) {
            return userModel.removeWebsite(userId, websiteId);
        });
}




function updateUser(userId, newUser) {
    return userModel.update({_id: userId}, {
        $set : {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            phone: newUser.phone,
            email: newUser.email
        }
    });
}
