import React from 'react';
import ErrorPage from './ErrorPage';

export function Component() {
  return (
    <div id='about' className='h-full'>
      About
    </div>
  );
}

export function ErrorBoundary() {
  return <ErrorPage />;
}
