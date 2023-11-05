import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getResources from '@wasp/queries/getResources';
import saveResource from '@wasp/actions/saveResource';

export function Resources() {
  const { data: resources, isLoading, error } = useQuery(getResources);
  const saveResourceFn = useAction(saveResource);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {resources.map((resource) => (
        <div
          key={resource.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{resource.title}</div>
          <div>{resource.topic}</div>
          <button
            onClick={() => saveResourceFn({ resourceId: resource.id })}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          >
            Save
          </button>
        </div>
      ))}
    </div>
  );
}