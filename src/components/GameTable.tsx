'use client';

import { useState } from 'react';
import { DataTable } from '@/components/ui/data-table';
import { GamesList, columns } from '@/components/Columns';
import GameForm from '@/components/GameForm';

export default function GameTable() {
  const [data, setData] = useState<GamesList[]>([]);

  const handleFormSubmit = (newGame: GamesList) => {
    setData((prevData) => [...prevData, newGame]);
  };

  return (
    <div>
      <GameForm onSubmit={handleFormSubmit} />
      {data.length > 0 && <DataTable columns={columns} data={data} />}
    </div>
  );
}