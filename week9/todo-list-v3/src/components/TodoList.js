import TodoItem from './TodoItem';
import useTodosContext from '../hooks/use-todos-context';

export default function TodoList() {
  const { todos } = useTodosContext();
  const renderedTodos = todos.toReversed().map((todo) => {
    return (
      <div className='flex flex-col gap-2'>
        <TodoItem todo={todo} />
      </div>
    );
  });
  return <div>{renderedTodos}</div>;
}
