var app=require('../../express');

app.get('/api/user?username=username&password=password/', findUserByCredentials);
app.get('/api/user/:userId', findUserById);


var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: true},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
];

function findUserById(req, response) {
    var userId = req.params['userId'];
    var user = users.find(function (user) {
        return user._id === userId;
    });
    response.send(user);
}

function findUserByCredentials(req, response) {
    var username = req.query['username'];
    var password = req.query['password'];
    for (var u in users) {
        var user = users[u];
        if (user.username === username
            && user.password === password) {
            response.json(user);
            return;
        }
    }
    response.sendStatus(404);

}
