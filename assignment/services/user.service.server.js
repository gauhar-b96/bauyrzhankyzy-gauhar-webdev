var app = require('../../express');

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: true},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
];

// http handlers
app.get('/api/assignment/users', getAllUsers);
app.get('/api/assignment/user/:userId', findUserById);
app.get('/api/assignment/user', findUser);
app.post('/api/assignment/user', registerUser);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUser);

function deleteUser(req, response) {
    var userId = req.params.userId;
    var user = users.find(function user() {
        return user._id === userId;
    });
    var index = users.indexOf(user);
    users.splice(index, 1);
    response.sendStatus(200);
}


function updateUser(req, response) {
    var userId = req.params.userId;
    var user = req.body;

    for (var u in users) {
        if (users[u]._id === userId) {
            users[u] = user;
            //    response.send(user);
            response.sendStatus(200);
            return;
        }
    }
    response.sendStatus(404);
}

function registerUser(req, response) {
    var user = req.body;
    user._id = (new Date()).getTime() + "";
    users.push(user);
    response.send(user);
}

// findUser is a combination of findUserByCredentials and findUserByUsername
// due to the shared API
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