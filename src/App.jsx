import React from 'react';
import Nav from './Components/Nav';

import './styles/App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
