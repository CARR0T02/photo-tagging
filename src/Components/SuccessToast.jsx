import React from 'react';
import { Toast } from 'flowbite-react';

export default function SuccessToast({ message = 'You found one!' }) {
  return (
    <Toast className='!bg-green-200'>
      <div className='text-sm sm:text-base font-normal text-gray-600'>
        {message}
      </div>
      <Toast.Toggle className='!bg-green-200 text-gray-600' />
    </Toast>
  );
}
