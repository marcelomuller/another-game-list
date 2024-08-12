'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type GamesList = {
  id: string,
  title: string,
  genre: string,
  hoursPlayed: number,
  recommended: boolean,
  status: 'beaten' | 'completed' | 'dropped',
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
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];
