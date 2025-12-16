import { useState } from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

function TodoCard() {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    // console.log(title);
    // NEVER todos.push({title},{title})

    // create a new array
    // copy paste (spread) the old values in first
    // add new, or override values last
    const updatedTodos = [
      ...todos,
      { id: Math.round(Math.random() * 9999), title },
      // { id: Math.round(Math.random() * 9999), title }, just 'title' means the key will be title and the value will be the title variable from this function
    ];
    setTodos(updatedTodos);
  };

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='rounded-lg col-span-2 row-span-3 flex flex-col bg-blue-200 p-2'>
      <TodoCreate onCreate={createTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodoById}
        onSubmit={editTodoById}
      />
    </div>
  );
}

export default TodoCard;
