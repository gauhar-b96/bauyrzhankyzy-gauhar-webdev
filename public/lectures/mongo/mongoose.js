/**
 * Created by gauharbauyrzhankyzy on 8/6/17.
 */
// TODO: npm instal mongoose
var mongoose = require('mongoose');
// to connect to a database
mongoose.connect('mongodb://localhost/webdev_assignment5');
mongoose.Promise = require('q').Promise;

// to create a schema
todoSchema = mongoose.Schema({
    title: String,
    dueDate: Date
}, {collection: 'todo'});

// to interact with instance objects & etc., create a model
todoModel = mongoose.model('TodoModel', todoSchema);

todoModel.findAllTodos = findAllTodos;
todoModel.createTodo = createTodo;

modules.export = todoModel;

createTodo({title: 'Upload', date: new Date()})
    .then(function (todo) {
        console.log(todo);
        return findAllTodos();
    })
    .then(function (toDos) {
        console.log(toDos);
    });

function findAllTodos() {
    return todoModel.find();
}

function createTodo(todo) {
    return todoModel.create(todo);
}
