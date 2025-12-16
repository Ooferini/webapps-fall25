import WeatherCard from './components/WeatherCard';
import SportsCard from './components/SportsCard';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className='h-dvh grid grid-cols-6 grid-rows-3 gap-10 p-10'>
      <WeatherCard />
      <SportsCard />
      <TodoCard />
    </div>
  );
}

export default App;
