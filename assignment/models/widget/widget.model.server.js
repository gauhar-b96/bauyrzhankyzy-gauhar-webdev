var mongoose = require('mongoose');
var userSchema =  require('./user.schema.server');

var userModel = mongoose.model('UserModel', userSchema);
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.deleteUser = deleteUser;
userModel.updateUser = updateUser;
userModel.addWebsite = addWebsite;
userModel.removeWebsite = removeWebsite;


module.exports = userModel;

// return userModel.create(user) is a promise
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


function addWebsite(userId, websiteId) {
   return userModel
        .findById(userId)
        .then(function(user) {
            user.websites.push(websiteId);
            return user.save();
        });
}

function removeWebsite(userId, websiteId) {
    return userModel
        .findById(userId)
        .then(function(user) {
            var index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        });
}