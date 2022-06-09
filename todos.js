let input = prompt("What would you like to do?")
const todos = ['Collect Eggs', 'beat farai']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**888888')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt("Enter a new Todo")
        todos.push(newTodo)
        console.log(`${newTodo} has been added to the list`)
    } else if (input === 'delete') {
        const todoNum = parseInt(prompt("Enter Todo number to be deleted"))
        if (!Number.isNaN(todoNum)) {
            const del = todos.splice(todoNum, 1)
            console.log(`${del} was deleted from list`)
        } else {
            console.log("Invalid Number")
        }
    }
    input = prompt("what would you like to do?")
}
console.log("You quit the app")