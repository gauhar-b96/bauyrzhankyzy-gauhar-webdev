var mongoose = require('mongoose');
var userSchema =  require('./website.schema.server');
var websiteModel = mongoose.model('WebsiteModel', websiteSchema);

module.exports = websiteModel;

websiteModel.createUser = createUser;
websiteModel.findUserById = findUserById;
websiteModel.findUserByUsername = findUserByUsername;
websiteModel.findUserByCredentials = findUserByCredentials;
websiteModel.deleteUser = deleteUser;
websiteModel.updateUser = updateUser;


function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({username:username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username:username, password: password});
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
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
