var app = require('../../express');

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
];

app.post("/api/assignment/website/:websiteId/page", createPage);
app.get("/api/assignment/website/:websiteId/page", findPageByWebsiteId);
app.get("/api/assignment/page/:pageId", findPageById);
app.put("/api/assignment/page/:pageId", updatePage);
app.delete("/api/assignment/page/:pageId", deletePage);


function deletePage(req, response) {
    var pageId = req.params.pageId;
    var page = pages.find(function (page) {
        return page._id === pageId;
    });
    var index = pages.indexOf(page);
    pages.splice(index, 1);
    response.sendStatus(200);
}


function updatePage(req, response) {
    var pageId = req.params.pageId;
    var page = req.body;

    for (var p in pages) {
        if (pages[p]._id === pageId) {
            pages[p] = page;
            response.sendStatus(200);
            return;
        }
    }
}

function findPageById(req, response) {
    for (var p in pages) {
        if (pages[p]._id === req.params.pageId) {
            response.json(pages[p]);
            return;
        }
    }
    response.sendStatus(404);
}

function findPageByWebsiteId(req, response) {
    var websiteId = req.params.websiteId;
    var sites = [];
    for(var p in pages) {
        if(pages[p].websiteId === websiteId) {
            sites.push(pages[p]);
        }
    }
    response.send(sites);
}

function createPage(req, response) {
    var page = req.body;
    var websiteId = req.params.websiteId;
    page.websiteId = websiteId;
    page.created = new Date();
    page.updated = new Date();
    page._id = (new Date()).getTime() + "";
    pages.push(page);
    response.json(pages);
}