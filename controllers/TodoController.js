const TodoModel = require('../models/TodoModel');
const TodoView = require('../views/TodoView');

class TodoController {
    static show() {
        const todos = TodoModel.show();
        TodoView.show(todos);
    }

    static add(todo) {
        TodoModel.add(todo);
        TodoView.add(todo);
    }

    static update(todo) {
        TodoModel.update(todo);
        TodoView.update(todo);
    }

    static delete(todo) {
        TodoModel.delete(todo);
        TodoView.delete(todo);
    }

    static message(msg) {
        TodoView.message(msg)
    }
}

module.exports = TodoController;