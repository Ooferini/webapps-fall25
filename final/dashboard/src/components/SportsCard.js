import { getHockey } from '../api';
import { getFootball } from '../api';
import { useState } from 'react';

const SportsCard = () => {
  const [hockeyResults, setHockeyResults] = useState();
  const [footballResults, setFootballResults] = useState();
  const getSportsResults = async () => {
    setHockeyResults(await getHockey());
    setFootballResults(await getFootball());
  };
  return (
    <div
      className='rounded-lg col-span-2 row-span-1 flex bg-blue-200'
      onClick={getSportsResults}
    >
      <div className='text-4xl flex flex-col p-4 container justify-around'>
        <p className='mx-auto'>
          Sabres: {hockeyResults?.scores?.home} Away:{' '}
          {hockeyResults?.scores?.away}
        </p>
        <p className='mx-auto'>
          Bills: {footballResults?.scores?.home?.total} Away:{' '}
          {footballResults?.scores?.away?.total}
        </p>
      </div>
    </div>
  );
};

export default SportsCard;
