class TodoView {

    static show(todos) {
        console.log('To Do List : ');
        todos.forEach(todo => {
            const { id, task, status } = todo;
            const stat = status ? '✔️' : '❌';
            console.log(`${id}. ${task} || ${stat}`)
        });
    }

    static add(todo) {
        console.log(`To do berhasil ditambahkan: ${todo}`)
    }

    static update(todo) {
        console.log(`To do ${todo[0]} berhasil diupdate: ${todo[1]}`);
    }

    static delete(todos) {
        console.log(`Data ${todos[0]} berhasil dihapus`)
    }

    static message(msg) {
        console.log(msg);
    }

}

module.exports = TodoView;