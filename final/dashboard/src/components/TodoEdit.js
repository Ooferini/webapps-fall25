import { useState } from 'react';

export default function TodoEdit({ todo, onSubmit }) {
  const [title, setTitle] = useState(todo.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
  };
  return (
    <form className='flex flex-row m-1' onSubmit={handleSubmit}>
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
