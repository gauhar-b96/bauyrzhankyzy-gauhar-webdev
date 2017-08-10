var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model('WebsiteModel', websiteSchema);
var userModel = require('../user/user.model.server');
module.exports = websiteModel;

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesByUser = findWebsitesByUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.updateWebsite = updateWebsite;
websiteModel.addPage = addPage;
websiteModel.removePage = removePage;

function createWebsite(userId, website) {
    website._user = userId;
    var websiteTemp = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTemp = websiteDoc;
            return userModel.addWebsite(userId, websiteDoc._id);
        })
        .then(function (websiteDoc) {
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

function deleteWebsite(userId, websiteId) {
    return websiteModel
        .remove({_id:websiteId})
        .then(function (status) {
            return userModel.removeWebsite(userId, websiteId);
        });
}




function updateWebsite(websiteId, newWebsite) {
    return websiteModel.update({_id: websiteId}, {
        $set : {
            name: newWebsite.name,
            description: newWebsite.description,
        }
    });
}

function addPage(websiteId, pageId) {
    return websiteModel
        .findById(websiteId)
        .then(function(website) {
            website.pages.push(pageId);
            return website.save();
        });
}

function removePage(websiteId, pageId) {
    return websiteModel
        .findById(websiteId)
        .then(function(website) {
            var index = website.pages.indexOf(pageId);
            website.pages.splice(index, 1);
            return website.save();
        });
}