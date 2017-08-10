var mongoose = require('mongoose');
var widgetSchema = mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dateCreated: {type: Date, default: Date.now},
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: "WebsiteModel"}]
}, {collection: "widget"});
module.exports = widgetSchema;