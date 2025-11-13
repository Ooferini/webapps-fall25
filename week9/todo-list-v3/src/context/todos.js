import { createContext, useState } from 'react';
import axios from 'axios';

const TodosContext = createContext();

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos');
    setTodos(response.data);
  };

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

  const valuesToShare = {
    todos,
    fetchTodos,
    createTodo,
    deleteTodoById,
    editTodoById,
  };

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  );
};

export { Provider };
export default TodosContext;
