import { GamesList, columns } from '../../components/Columns';
import { DataTable } from '../../components/ui/data-table';

async function getData(): Promise<GamesList[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      title: 'ELDEN RING',
      genre: 'Soulslike',
      hoursPlayed: 100,
      recommended: true,
      status: 'completed',
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
