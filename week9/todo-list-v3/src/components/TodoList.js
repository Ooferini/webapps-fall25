import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete, onSubmit }) {
  const renderedTodos = todos.toReversed().map((todo) => {
    return (
      <div className='flex flex-col gap-2'>
        <TodoItem todo={todo} onDelete={onDelete} onEdit={onSubmit} />
      </div>
    );
  });
  return <div>{renderedTodos}</div>;
}
