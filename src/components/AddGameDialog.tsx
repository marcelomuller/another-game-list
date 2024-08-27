'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GameForm from '@/components/GameForm';
import { GamesList } from '@/components/Columns';
import { useContext, useState } from 'react';
import { AppContext } from '@/context/app-context';

export function AddGameDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { handleSetData } = useContext(AppContext);

  const handleFormSubmit = (newGame: GamesList) => {
    handleSetData(newGame);
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add a game</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add a game</DialogTitle>
          <DialogDescription>
            Add a new game to your list.
          </DialogDescription>
        </DialogHeader>
        <GameForm onSubmit={handleFormSubmit} onCancel={() => setIsDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
