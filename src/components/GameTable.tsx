'use client';

import { useState } from 'react';
import { DataTable } from '@/components/ui/data-table';
import { GamesList, columns } from '@/components/Columns';
import GameForm from '@/components/GameForm';

export default function GameTable({ initialData }: { initialData: GamesList[] }) {
  const [data, setData] = useState<GamesList[]>(initialData);

  const handleFormSubmit = (newGame: GamesList) => {
    setData((prevData) => [...prevData, newGame]);
  };

  return (
    <div>
      <GameForm onSubmit={handleFormSubmit} />
      <DataTable columns={columns} data={data} />
    </div>
  );
}