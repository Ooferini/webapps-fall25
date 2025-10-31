import { Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-slate-500 h-screen overflow-y-scroll'>
      <Navbar />
      <Routes>
        <Route path='/events' element={<EventsPage />} />
      </Routes>
    </div>
  );
};

export default App;
