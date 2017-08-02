var app = require('../../express');
var multer = require('multer'); // npm install multer --save
var upload = multer ({ dest: __dirname+'/../../public/assignment/uploads' });

app.post ("/api/assignment/uploads", upload.single('myFile'), uploadImage);

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
 //   widget = getWidgetById(widgetId);
    var widget = {};
    widget.url = '/api/assignment/uploads'+filename;
    var callbackUrl = "/api/assignment/#!/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;
    res.redirect(callbackUrl);
}
