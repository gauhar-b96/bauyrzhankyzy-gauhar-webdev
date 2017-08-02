var app = require('../../express');

var websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Twiter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
];

app.get("/api/assignment/user/:userId/website", findWebsitesByUser);
app.post("/api/assignment/user/:userId/website", createWebsite);
app.get("/api/assignment/user/:userId/website/:websiteId", findWebsiteById);
app.put('/api/assignment/website/:websiteId', updateWebsite);
app.delete('/api/assignment/website/:websiteId', deleteWebsite);


function deleteWebsite(req, response) {
    var websiteId = req.params.websiteId;
    var website = websites.find(function website() {
        return website._id === websiteId;
    });
    var index = websites.indexOf(website);
    websites.splice(index, 1);
    response.sendStatus(200);
}


function updateWebsite(req, response) {
    var websiteId = req.params.websiteId;
    var website = req.body;

    for (var w in websites) {
        if (websites[w]._id === websiteId) {
            websites[w] = website;
        //        response.send(website);
            response.sendStatus(200);
            return;
        }
    }
}

function findWebsiteById(req, response) {
    for (var w in websites) {
        if (websites[w]._id === req.params.websiteId) {
            response.json(websites[w]);
            return;
        }
    }
    response.sendStatus(404);
}

function findWebsitesByUser(req, response) {
    var userId = req.params.userId;
    var sites = [];
    for(var w in websites) {
        if(websites[w].developerId === userId) {
            sites.push(websites[w]);
        }
    }
    response.send(sites);
}

function createWebsite(req, response) {
    var website = req.body;
    var userId = req.params.userId;
    website.developerId = userId;
    website.created = new Date();
    website.updated = new Date();
    website._id = (new Date()).getTime() + "";
    websites.push(website);
    response.json(websites);
}