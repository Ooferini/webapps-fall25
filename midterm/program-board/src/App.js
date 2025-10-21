import { Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage';

const App = () => {
  return (
    <div className='bg-slate-500 h-screen overflow-y-scroll'>
      <EventsPage />
    </div>
  );
};

export default App;
