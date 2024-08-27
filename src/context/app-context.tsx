'use client';

import { createContext, ReactNode, useCallback, useState } from 'react';
import { GamesList } from '@/components/Columns';

interface IAppContext {
  data: any;
  handleSetData: (newGame: GamesList) => void;
}

export const AppContext = createContext<IAppContext>({
  data: {},
  handleSetData: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const initialData: GamesList[] = [
    {
      id: '0',
      title: 'Dark Souls II',
      genre: 'Soulslike',
      hoursPlayed: 0,
      recommended: false,
      gameStatus: 'Dropped',
    },
    {
      id: '1',
      title: 'ELDEN RING',
      genre: 'Soulslike',
      hoursPlayed: 233,
      recommended: true,
      gameStatus: 'Completed',
    },
    {
      id: '2',
      title: 'Baldur\'s Gate 3',
      genre: 'ARPG',
      hoursPlayed: 185,
      recommended: false,
      gameStatus: 'Dropped',
    },
    {
      id: '3',
      title: 'Cuphead',
      genre: 'Shooter',
      hoursPlayed: 24,
      recommended: false,
      gameStatus: 'Beaten',
    },
    {
      id: '4',
      title: 'Devil May Cry 5',
      genre: 'Hack \'n Slash',
      hoursPlayed: 20,
      recommended: true,
      gameStatus: 'Beaten',
    },
    {
      id: '5',
      title: 'Lies of P',
      genre: 'Soulslike',
      hoursPlayed: 60,
      recommended: true,
      gameStatus: 'Completed',
    },
    {
      id: '6',
      title: 'ELDEN RING',
      genre: 'Soulslike',
      hoursPlayed: 100,
      recommended: true,
      gameStatus: 'Completed',
    },
    {
      id: '7',
      title: 'Persona 4 Golden',
      genre: 'JRPG',
      hoursPlayed: 162,
      recommended: true,
      gameStatus: 'Beaten',
    },
    {
      id: '8',
      title: 'Resident Evil 4',
      genre: 'Action',
      hoursPlayed: 85,
      recommended: true,
      gameStatus: 'Completed',
    },
    {
      id: '9',
      title: 'Bloodstained: Ritual of the Night',
      genre: 'Metroidvania',
      hoursPlayed: 68,
      recommended: true,
      gameStatus: 'Completed',
    },
    {
      id: '10',
      title: 'Stardew Valley',
      genre: 'Simulator',
      hoursPlayed: 470,
      recommended: true,
      gameStatus: 'Beaten',
    },
  ];

  const [data, setData] = useState<GamesList[]>(initialData);

  const handleSetData = useCallback((newGame: GamesList) => {
    setData((prevData) => [...prevData, newGame]);
  }, []);

  return (
    <AppContext.Provider value={{ data, handleSetData }}>
      {children}
    </AppContext.Provider>
  );
};
