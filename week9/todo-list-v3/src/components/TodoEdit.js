import { useState } from 'react';
import useTodosContext from '../hooks/use-todos-context';

export default function TodoEdit({ todo, onSubmit }) {
  const { editTodoById } = useTodosContext();
  const [title, setTitle] = useState(todo.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editTodoById(todo.id, title);
    onSubmit();
  };
  return (
    <form className='flex flex-row m-1 ml-[2px]' onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={title} />
      <button
        className='ml-1 px-2 bg-green-500 rounded-xl'
        onClick={handleSubmit}
      >
        submit
      </button>
    </form>
  );
}
