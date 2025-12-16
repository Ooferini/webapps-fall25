import { useState } from 'react';

// you can destructure props in the function declaration parameter thing
export default function TodoCreate({ onCreate, todos }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <form className='flex flex-row mx-auto' onSubmit={handleSubmit}>
      <input
        className='mr-1 border-slate-600 border-2 rounded-lg'
        type='text'
        value={title}
        onChange={handleChange}
      />
      <button className='bg-green-600 px-2 rounded-full text-nowrap text-white'>
        +
      </button>
    </form>
  );
}
