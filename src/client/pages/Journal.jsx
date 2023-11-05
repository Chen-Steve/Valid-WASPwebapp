import React, { useState } from 'react';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getJournalEntries from '@wasp/queries/getJournalEntries';
import createJournalEntry from '@wasp/actions/createJournalEntry';

export function Journal() {
  const { data: journalEntries, isLoading, error } = useQuery(getJournalEntries);
  const createJournalEntryFn = useAction(createJournalEntry);
  const [newEntry, setNewEntry] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateEntry = () => {
    createJournalEntryFn({ content: newEntry });
    setNewEntry('');
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Journal</h1>
      <div className='mb-4'>
        <textarea
          className='w-full h-40 p-2 border rounded'
          placeholder='Write your journal entry here'
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={handleCreateEntry}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Add Entry
      </button>
      <div className='mt-4'>
        {journalEntries.map((entry) => (
          <div
            key={entry.id}
            className='bg-gray-100 p-4 mb-4 rounded-lg'
          >
            <p>{entry.content}</p>
            <p className='text-xs text-gray-500 mt-2'>Created on: {entry.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}