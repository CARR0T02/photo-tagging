import React from 'react';
import ErrorPage from './ErrorPage';

export function Component({ docData }) {
  return <div>GamePage</div>;
}

export function ErrorBoundary() {
  return <ErrorPage />;
}
