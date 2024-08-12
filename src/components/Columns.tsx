'use client';

import { ColumnDef } from '@tanstack/react-table';

export type GamesList = {
  id: string,
  title: string,
  genre: string,
  hoursPlayed: number,
  recommended: boolean,
  gameStatus: 'Beaten' | 'Completed' | 'Dropped',
}

export const columns: ColumnDef<GamesList>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'genre',
    header: 'Genre',
  },
  {
    accessorKey: 'hoursPlayed',
    header: 'Hours played',
  },
  {
    accessorKey: 'recommended',
    header: 'Recommended',
    cell: ({ getValue }) => getValue<boolean>() ? 'Yes' : 'No',
  },
  {
    accessorKey: 'gameStatus',
    header: 'Status',
  },
];
