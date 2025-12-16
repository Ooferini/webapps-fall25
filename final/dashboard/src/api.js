import axios from 'axios';

export const getWeather = async () => {
  // API KEY IS HARDCODED!!! DO NOT PUSH
  // also location is hardcoded to new york because it's the only city that matters but i'll add some location thing later
  const response = await axios.get(
    'https://api.weatherapi.com/v1/current.json?key=235126c75d1d4a84bbb00237250912&q=10003&aqi=yes'
  );
  // console.log(response.data.current.condition.text);
  return response.data;
};

export const getHockey = async () => {
  const response = await axios.get(
    'https://v1.hockey.api-sports.io/games?league=57&season=2023&team=674',
    {
      headers: { 'x-apisports-key': '3d23d6d5f70f7f4ff7128db7dbcc9759' },
    }
  );
  return response.data.response[1];
};

export const getFootball = async () => {
  const response = await axios.get(
    'https://v1.american-football.api-sports.io/games?season=2023&team=20',
    {
      headers: { 'x-apisports-key': '3d23d6d5f70f7f4ff7128db7dbcc9759' },
    }
  );
  return response.data.response[1];
};
