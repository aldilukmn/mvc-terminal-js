// Process Argv: dapat mengambil input dari terminal
const TodoController = require('./controllers/TodoController');

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
    case 'show':
        TodoController.show();
        break;
    case 'add':
        // console.log('command add');
        TodoController.add(params);
        break;
    case 'update':
        // console.log('command update');
        TodoController.update(params);
        break;
    case 'delete':
        // console.log('command delete');
        TodoController.delete(params);
        break;
    default:
        // console.log('Masukkan command yang benar!');
        TodoController.message("Masukkan command yang benar!");
        break
}