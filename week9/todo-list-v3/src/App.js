import { useState, useEffect } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos');
    setTodos(response.data);
  };
  // NEVER EVER EVER
  // fetchTodos();
  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', {
      title,
    });
    // title here is the same as doing `title: title,`

    const updatedTodos = [...todos, response.data];
    setTodos(updatedTodos);
  };

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);

    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
    });

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...response.data };
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='m-2 flex flex-col'>
      <TodoCreate onCreate={createTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodoById}
        onSubmit={editTodoById}
      />
    </div>
  );
}

export default App;
