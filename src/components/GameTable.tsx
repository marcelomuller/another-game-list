'use client';

import { useContext } from 'react';
import { DataTable } from '@/components/ui/data-table';
import { GamesList, columns } from '@/components/Columns';
import GameForm from '@/components/GameForm';
import { AppContext } from '@/context/app-context';

export default function GameTable() {
  const { data, handleSetData } = useContext(AppContext);

  const handleFormSubmit = (newGame: GamesList) => {
    handleSetData(newGame);
  };

  return (
    <div>
      {/* <GameForm onSubmit={handleFormSubmit} /> */}
      {data.length > 0 && <DataTable columns={columns} data={data} /> }
    </div>
  );
}