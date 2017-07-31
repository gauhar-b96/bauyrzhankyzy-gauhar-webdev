var app = require('../express');

require('./services/user.service.server');

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: true},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
];

// http handlers
app.get('/api/users', getAllUsers);
app.get('/api/user/:userId', findUserById);
app.get('/api/user', findUser);

function findUser(req, response) {
    var username = req.query.username;
    var password = req.query.password;

    if (username && password) {
        for (var u in users) {
            var _user = users [u];
            if (_user.username === username &&
                _user.password === password) {
                response.send(_user);
                return;
            }
        }
    } else if(username) {
        for (var u in users) {
            if (users[u].username === username) {
                response.send(users[u]);
                return;
            }
        }
    }
    response.send("0");
}

function getAllUsers(req, response) {
    response.send(users);
}

function findUserById(req, response) {
    for (var u in users) {
        if (users[u]._id === req.params.userId) {
            response.send(users[u]);
        }
    }
}