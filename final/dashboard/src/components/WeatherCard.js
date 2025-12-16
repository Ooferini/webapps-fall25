import { getWeather } from '../api';
import { useState } from 'react';

const WeatherCard = () => {
  const [weatherResults, setWeatherResults] = useState();
  const getWeatherResults = async () => {
    setWeatherResults(await getWeather());
  };
  return (
    <div
      className='drop-shadow-xl rounded-lg col-span-2 row-span-1 flex bg-blue-200'
      onClick={getWeatherResults}
    >
      <div className='text-4xl flex flex-col p-4 container justify-around'>
        <p className='mx-auto'>{weatherResults?.location.name}</p>
        <p className='mx-auto'>{weatherResults?.current.temp_f}°</p>
        <p className='mx-auto'>
          Current condition: {weatherResults?.current.condition.text}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
