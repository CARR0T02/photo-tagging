import React from 'react';
import ErrorPage from './ErrorPage';

export function Component() {
  return <div>About</div>;
}

export function ErrorBoundary() {
  return <ErrorPage />;
}
