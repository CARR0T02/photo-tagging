import React from 'react';
import ErrorPage from './ErrorPage';

export function Component() {
  return (
    <div
      id='about'
      className='h-full text-gray-300 py-4 px-12 md:px-24 max-w-7xl mx-auto'
    >
      <h1 className='text-xl text-center md:text-2xl 2xl:text-3xl'>
        Photo Tagging App
      </h1>
      <section className='my-4 md:text-lg grid gap-4 2xl:text-xl'>
        <p>
          This project is built using React, TypeScript, Tailwind, and Firebase.
        </p>
        <p>
          The main objective of this application is to recreate the concept of
          the popular game "Where's Waldo." Users are required to search for
          specific characters displayed in the sidebar within the given photo.
        </p>
        <p>
          Unlike traditional styling methods like Sass, this project utilizes
          Tailwind CSS and incorporates the Flowbite framework to enhance the
          user interface. By combining these technologies, the app aims to
          provide a visually appealing and interactive experience for users.
        </p>
      </section>
    </div>
  );
}

export function ErrorBoundary() {
  return <ErrorPage />;
}
