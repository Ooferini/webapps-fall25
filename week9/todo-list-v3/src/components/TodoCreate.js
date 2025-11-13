import { useState } from 'react';
import useTodosContext from '../hooks/use-todos-context';

// you can destructure props in the function declaration parameter thing
export default function TodoCreate() {
  const { createTodo } = useTodosContext();
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(title);
    setTitle('');
  };

  return (
    <form className='flex flex-row' onSubmit={handleSubmit}>
      <input
        className='mr-1 border-slate-600 border-2'
        type='text'
        value={title}
        onChange={handleChange}
      />
      <button className='bg-green-400 p-1 rounded-lg text-nowrap'>
        Create Todo
      </button>
    </form>
  );
}
