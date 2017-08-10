var mongoose = require('mongoose');
var websiteSchema = mongoose.Schema({
    // parent reference
    _user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    name: {type: String, require: true},
    description: String,
    dateCreated: {type: Date, default: Date.now}
}, {collection: "website"});

module.exports = websiteSchema;