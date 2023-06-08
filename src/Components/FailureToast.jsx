import React from 'react';
import { Toast } from 'flowbite-react';

export default function FailureToast({ message = "That's incorrect!" }) {
  return (
    <Toast className='!bg-red-200'>
      <div className='text-sm sm:text-base font-normal text-gray-600'>
        {message}
      </div>
      <Toast.Toggle className='!bg-red-200 text-gray-600' />
    </Toast>
  );
}
