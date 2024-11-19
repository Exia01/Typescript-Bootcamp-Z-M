//helpers functions and clis
import { getTodosItems, addTodo, updateTodo, deleteTodo } from './todosActions';

export const greetAndListOutCommands = async () => {
  console.log('Welcome to the Todo List App!');
  console.log('Available commands:');
  console.log('- list: List all todos');
  console.log('- add <task>: Add a new todo');
  console.log('- update <id> <new-task>: Update a todo');
  console.log('- delete <id>: Delete a todo');
  console.log('- exit: Exit the app');
};
export const handleCommand = async (commandString: string, payloadString: string): Promise<string> => {
  // Remove the leading '-' and trim any whitespace
  const command = commandString.replace(/^-/, '').trim();

  switch (command) {
    case 'list':
      const todos = await getTodosItems();
      return `Todos:\n${todos.map(todo => `${todo.id}. ${todo.task}`).join('\n')}`;
    case 'add':
      if (!payloadString) {
        return 'Please provide a task to add.';
      }
      await addTodo(payloadString);
      return `Added "${payloadString}" to the list.`;
    case 'update':
      const [idToUpdate, ...newTaskParts] = payloadString.split(' ');
      const newTask = newTaskParts.join(' ');
      if (!idToUpdate || !newTask) {
        return 'Please provide both the id and new task.';
      }
      await updateTodo(idToUpdate, newTask);
      return `Updated todo with id "${idToUpdate}" to "${newTask}".`;
    case 'delete':
      if (!payloadString) {
        return 'Please provide the id of the todo to delete.';
      }
      await deleteTodo(payloadString);
      return `Deleted todo with id "${payloadString}".`;
    default:
      return 'Unknown command. Available commands: list, add, update, delete';
  }
};

