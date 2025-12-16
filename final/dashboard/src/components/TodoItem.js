import { useState } from 'react';
import TodoEdit from './TodoEdit';

export default function TodoItem({ todo, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleSubmit = (newTitle) => {
    onEdit(todo.id, newTitle);
    handleEdit();
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const content = showEdit ? (
    <TodoEdit todo={todo} onSubmit={handleSubmit} />
  ) : (
    <div className='flex flex-row m-1'>
      {todo.title}
      {/* <button
        className='ml-1 px-2 bg-green-500 rounded-xl'
        onClick={handleEdit}
      >
        edit
      </button> */}
      <button
        className='ml-1 px-2 bg-red-500 rounded-xl'
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );

  return <div>{content}</div>;
}
