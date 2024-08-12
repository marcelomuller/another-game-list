import { useEffect, useState } from 'react';

export const GetData = () => {
  const [games, setGames] = useState([]);
  
  const getGames = async () => {
    try {
      const res = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames().then((data) => {
      setGames(data);
      console.log('GAMES DATA::: ', games);
    });
  });
};

export default GetData;
