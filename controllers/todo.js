const Todo = require('../models/todo');

module.exports.index = async (req, res) => {
    const todos = await Todo.find({});
    res.render('index', {todos});
}

module.exports.createTodo = async (req, res) => {
    const todo = new Todo({todo: req.body.todo});
    await todo.save();
    res.redirect('/')
}

module.exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/')
}