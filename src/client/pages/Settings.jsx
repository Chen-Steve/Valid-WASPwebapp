import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getUser from '@wasp/queries/getUser';
import updatePreferences from '@wasp/actions/updatePreferences';

export function Settings() {
  const { data: user, isLoading, error } = useQuery(getUser);
  const updatePreferencesFn = useAction(updatePreferences);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    updatePreferencesFn({ [name]: checked });
  };

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Settings</h1>
      <div className='flex items-center mb-4'>
        <input
          type='checkbox'
          name='notifications'
          checked={user.preferences.notifications}
          onChange={handleCheckboxChange}
          className='mr-2 h-4 w-4'
        />
        <label htmlFor='notifications'>Receive notifications</label>
      </div>
      <div className='flex items-center mb-4'>
        <input
          type='checkbox'
          name='privacy'
          checked={user.preferences.privacy}
          onChange={handleCheckboxChange}
          className='mr-2 h-4 w-4'
        />
        <label htmlFor='privacy'>Enable privacy mode</label>
      </div>
      <div className='flex items-center mb-4'>
        <input
          type='checkbox'
          name='darkMode'
          checked={user.preferences.darkMode}
          onChange={handleCheckboxChange}
          className='mr-2 h-4 w-4'
        />
        <label htmlFor='darkMode'>Enable dark mode</label>
      </div>
      <div>
        <Link to='/change-password' className='text-blue-500 hover:underline'>Change password</Link>
      </div>
    </div>
  );
}