const fs = require('fs');

class TodoModel {

    constructor (id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status || false;
    }

    static getTodos() {
        const data = fs.readFileSync('./data.json', 'utf-8');
        const parseData = JSON.parse(data);
        const todos = parseData.map(data => {
            const {id, task, status} = data;
            return new TodoModel(id, task, status);
        })
        return todos;
    }

    static show() {
        const todos = this.getTodos();
        return todos;
    }

    static add(todo) {
        const todos = this.getTodos();
        const id = todos[todos.length - 1].id + 1;
        const task = todo[0];
        let temp = new TodoModel(id, task)
        todos.push(temp);
        this.save(todos)
    }

    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    }

    static update(todo) {
        let todos = this.getTodos();
        const id = Number(todo[0]);
        const task = todo[1];
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.task = task;
            }
            return todo
        })
        this.save(todos);
    }

    static delete(todo) {
        let todos = this.getTodos();
        const id = Number(todo[0]);
        todos = todos.filter(todo => todo.id !== id);
        this.save(todos);
    }

}

module.exports = TodoModel;