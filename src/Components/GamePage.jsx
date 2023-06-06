import React from 'react';
import ErrorPage from './ErrorPage';
import { useLocation } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';

export function Component() {
  let state = useLocation();
  const docData = state.state.docData;

  return (
    <div id='game-page'>
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item>Char 1</Sidebar.Item>
            <Sidebar.Item>Char 2</Sidebar.Item>
            <Sidebar.Item>Char 3</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div id='image-container'>
        <img src={docData?.levelURL} alt={docData?.levelName} />
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return <ErrorPage />;
}
