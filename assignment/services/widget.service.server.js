var app = require('../../express');
var multer = require('multer'); // npm install multer --save
var upload = multer ({ dest: __dirname+'/../../public/assignment/uploads' });

var widgets = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {"_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200/"},
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {"_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%", "url": "https://youtu.be/AM2Ivdi9c4E"},
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

app.post ("/api/assignment/uploads", upload.single('myFile'), uploadImage);
// identical to findAllWidgetsForPage
app.get('/api/assignment/page/:pageId/widget', findWidgetsByPageId);
app.get('/api/assignment/widget/:widgetId', findWidgetById);
app.post("/api/assignment/page/:pageId/widget", createWidget);

app.put('/api/assignment/widget/:widgetId', updateWidget);
app.delete('/api/assignment/widget/:widgetId', deleteWidget);


function deleteWidget(req, response) {
    var widgetId = req.params.widgetId;
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    var index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    response.sendStatus(200);
}


function updateWidget(req, response) {
    var widgetId = req.params.widgetId;
    var widget = req.body;

    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widgets[w] = widget;
            response.sendStatus(200);
            return;
        }
    }
}

function createWidget(req, response) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widget.pageId = pageId;
    widget._id = (new Date()).getTime() + "";
    widgets.push(widget);
    response.json(widget);
}

function findWidgetById(req, response) {
    for (var w in widgets) {
        if (widgets[w]._id === req.params.widgetId) {
            response.json(widgets[w]);
            return;
        }
    }
    response.sendStatus(404);
}

function findWidgetsByPageId(req, response) {
    var pageId = req.params.pageId;
    var sites = [];
    for (var w in widgets) {
        if (widgets[w].pageId === pageId) {
            sites.push(widgets[w]);
        }
    }
    response.send(sites);
}

function uploadImage (req, res) {
    var widgetId = req.body.widgetId ;
    var width = req.body.width ;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename; // new file name in upload folder
    var path = myFile.path; // full path of uploaded file
    var destination = myFile.destination; // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    console.log(myFile);
    var widget = findWidgetById(widgetId);
 //   var widget = {};
    widget.url = '/api/assignment/uploads'+filename;
    var callbackUrl = "/api/assignment/#!/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;
    res.redirect(callbackUrl);
}
