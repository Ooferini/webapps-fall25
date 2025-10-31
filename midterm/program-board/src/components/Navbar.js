import { Link } from 'react-router';
import pbLogo from '../assets/pb-white.png';

export default function Navbar() {
  return (
    <div className='w-full h-16 text-white bg-blue-950 flex flex-row justify-between px-4 rounded-b-lg drop-shadow-lg'>
      <Link to='/' className='h-16 flex flex-row gap-4 w-1/2'>
        <div className='flex flex-col justify-around'>
          <img src={pbLogo} className='h-14 p-1' />
        </div>
        <h2 className='h-16 text-2xl flex flex-col justify-around'>
          NYU Program Board
        </h2>
      </Link>
      <Link
        to='/events/'
        className='h-16 text-2xl flex flex-col justify-around'
      >
        <h2>Events</h2>
      </Link>
    </div>
  );
}
