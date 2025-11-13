import { useEffect } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import useTodosContext from './hooks/use-todos-context';

function App() {
  const { fetchTodos } = useTodosContext();

  // NEVER EVER EVER
  // fetchTodos();
  // it'll run it every time anything changes
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='m-2 flex flex-col'>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
