// Importing the promises-based version of the fs module.
// This allows us to use async/await syntax with file system operations,
// which leads to more readable and maintainable asynchronous code.
// It also helps avoid callback hell and makes error handling more straightforward.

import { promises as fs } from 'fs';

import { faker } from '@faker-js/faker';

//File path CONSTANT
const FILE_PATH = './data.json';
type TodoItem = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};
//get todos from file

async function getTodosItems(): Promise<TodoItem[]> {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log('No todos found. Creating an empty file...');
      await fs.writeFile(FILE_PATH, '[]', 'utf8');
      return [];
    }
    console.error('Error reading todos:', error);
    throw error;
  }
}

//add todo

async function addTodo(task: string): Promise<TodoItem> {
  try {
    // Ensure nanoid is loaded

    const todos = await getTodosItems();
    console.log('Loaded todos:', todos);
    const newTodo: TodoItem = {
      id: faker.string.nanoid(5), // Generates a 5-character ID
      task,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    todos.push(newTodo);
    await saveTodosItems(todos);
    console.log('Todo added successfully!', newTodo);
    return newTodo;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
}

async function saveTodosItems(todos: TodoItem[]): Promise<void> {
  try {
    const data = JSON.stringify(todos, null, 2); // The '2' argument adds indentation for readability
    await fs.writeFile(FILE_PATH, data, 'utf8');
    console.log('Todos saved successfully!');
  } catch (error) {
    console.error('Error saving todos:', error);
    throw error; // It's often better to throw the error than exit the process
  }
}
//update todo

async function updateTodo(id: string, updatedTask: string): Promise<void> {
  try {
    const todos = await getTodosItems();
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      console.log(`Todo with ID "${id}" not found.`);
      return;
    }
    todos[index].task = updatedTask;
    todos[index].updatedAt = new Date();
    await saveTodosItems(todos);
    console.log('Todo updated successfully!', todos[index] as TodoItem);
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error; // It's often better to throw the error than exit the process
  }
}

//delete todo

async function deleteTodo(id: string): Promise<void> {
  try {
    const todos = await getTodosItems();
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      console.log(`Todo with ID "${id}" not found.`);
      return;
    }
    todos.splice(index, 1);
    await saveTodosItems(todos);
    console.log('Todo deleted successfully!');
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error; // It's often better to throw the error than exit the process
  }
}

export { getTodosItems, addTodo, updateTodo, deleteTodo };
