var mongoose = require('mongoose');
var pageSchema =  require('./page.schema.server');
var pageModel = mongoose.model('PageModel', pageSchema);
var websiteModel = require('../website/website.model.server');

pageModel.createPage = createPage;
pageModel.findPageById = findPageById;
pageModel.findPageByWebsiteId = findPageByWebsiteId;
pageModel.deletePage = deletePage;
pageModel.updatePage = updatePage;
pageModel.addWidget = addWidget;
pageModel.removeWidget = removeWidget;

module.exports = pageModel;

function createPage(websiteId, page) {
    page._website = websiteId;
    var pageTemp = null;
    return pageModel
        .create(page)
        .then(function (pageDoc) {
            pageTemp = pageDoc;
            return websiteModel.addPage(websiteId, pageTemp._id);
        })
        .then(function (pageDoc) {
            return pageTemp;
        });
}

function findPageByWebsiteId(websiteId) {
    return pageModel
        .find({_website: websiteId});
}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}

function deletePage(websiteId, pageId) {
    return pageModel
        .remove({_id:pageId})
        .then(function (status) {
            return websiteModel.removePage(websiteId, pageId);
        });
}

function updatePage(websiteId, newPage) {
    return pageModel.update({_id: websiteId}, {
        $set : {
            name: newPage.name,
            title: newPage.title,
            description: newPage.description
        }
    });
}

function addWidget(pageId, widgetId) {
   return pageModel
        .findById(pageId)
        .then(function(page) {
            page.widgets.push(widgetId);
            return page.save();
        });
}

function removeWidget(pageId, widgetId) {
    return pageModel
        .findById(pageId)
        .then(function(page) {
            var index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index, 1);
            return page.save();
        });
}