import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id='error-page'>
      <h1>Unexpected Error!</h1>
      <p>It seem's like there is an error...</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
