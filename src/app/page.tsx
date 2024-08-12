import Image from 'next/image';
import GameForm from '@/components/GameForm';
import ModeToggle from '@/components/ModeToggle';
import { GamesList, columns } from '@/components/Columns';
import { DataTable } from '@/components/ui/data-table';

async function getData(): Promise<GamesList[]> {
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

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <GameForm />
      <DataTable columns={columns} data={data} />

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
