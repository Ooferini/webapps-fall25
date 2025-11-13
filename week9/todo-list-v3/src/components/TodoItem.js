import { useState } from 'react';
import useTodosContext from '../hooks/use-todos-context';
import TodoEdit from './TodoEdit';

export default function TodoItem({ todo }) {
  const { deleteTodoById } = useTodosContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    deleteTodoById(todo.id);
  };

  const handleSubmit = () => {
    setShowEdit(!showEdit);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const content = showEdit ? (
    <TodoEdit todo={todo} onSubmit={handleSubmit} />
  ) : (
    <div className='flex flex-row m-1 ml-0'>
      {todo.title}
      <button
        className='ml-1 px-2 bg-green-500 rounded-xl'
        onClick={handleEdit}
      >
        edit
      </button>
      <button
        className='ml-1 px-2 bg-red-500 rounded-xl'
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );

  return <div>{content}</div>;
}
