'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Game name is required.' }),
  genre: z.string().min(1, { message: 'Game genre is required.' }),
  hoursPlayed: z.coerce.number().gte(0),
  gameStatus: z.enum(['Dropped', 'Completed', 'Beaten']),
  recommended: z.boolean(),
});

export const GameForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const hoursRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      genre: '',
      hoursPlayed: 0,
      gameStatus: undefined,
      recommended: false,
    }
  });
  
  const formSubmit = (data: z.infer<typeof formSchema>) => {
    const newGame = {
      id: Math.random().toString(32).substring(3),
      ...data,
    };
    onSubmit(newGame);
    form.reset();
    console.log('Form: ', data);
  };

  const handleHoursFocus = () => {
    hoursRef.current?.select();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formSubmit)}
        className='flex flex-col gap-6'
      >
        <FormField
          control={form.control}
          name="title"
          render={({field}) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex.: Dark Souls II"
                  type="name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({field}) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex.: Soulslike"
                  type="name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hoursPlayed"
          render={({field}) => (
            <FormItem>
              <FormLabel>Hours played</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Ex.: 40"
                  type="number"
                  ref={hoursRef}
                  onFocus={handleHoursFocus}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="recommended"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Recommended</FormLabel>
                <FormDescription>
                  You recommend this game to your fellow gamers.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
 
        <div className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="gameStatus"
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <label
                  className={`cursor-pointer p-4 border-2 rounded-lg shadow-sm transition-colors ${
                    field.value === 'Beaten' ? 'border-blue-400' : 'border-gray-300'
                  }`}
                  style={{ minHeight: "30%" }}
                >
                  <input
                    type="radio"
                    value="Beaten"
                    checked={field.value === 'Beaten'}
                    onChange={field.onChange}
                    className="hidden"
                  />
                  <div>
                    <h2 className='text-sm my-0.5'>Game beaten?</h2>
                    <FormDescription>You{`'ve`} only beaten the game, and that{`'s`} all.</FormDescription>
                  </div>
                </label>
                <label
                  className={`cursor-pointer p-4 border-2 rounded-lg shadow-sm transition-colors ${
                    field.value === 'Completed' ? 'border-blue-400' : 'border-gray-300'
                  }`}
                  style={{ minHeight: "30%" }}
                >
                  <input
                    type="radio"
                    value="Completed"
                    checked={field.value === 'Completed'}
                    onChange={field.onChange}
                    className="hidden"
                  />
                  <div>
                    <h2 className='text-sm my-0.5'>Game completed?</h2>
                    <FormDescription>Completed 100% of the game.</FormDescription>
                  </div>
                </label>
                <label
                  className={`cursor-pointer p-4 border-2 rounded-lg shadow-sm transition-colors ${
                    field.value === 'Dropped' ? 'border-blue-400' : 'border-gray-300'
                  }`}
                  style={{ minHeight: "30%" }}
                >
                  <input
                    type="radio"
                    value="Dropped"
                    checked={field.value === 'Dropped'}
                    onChange={field.onChange}
                    className="hidden"
                  />
                  <div>
                    <h2 className='text-sm my-0.5'>Game dropped?</h2>
                    <FormDescription>Dropped the game without beating it.</FormDescription>
                  </div>
                </label>
              </div>
            )}
          />
        </div>
        <div className='flex flex-col items-center mb-12'>
          <Button type='submit' className='w-fit'>Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default GameForm;