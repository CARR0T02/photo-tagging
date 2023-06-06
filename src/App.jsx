import React from 'react';
import Nav from './Components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav className='!bg-slate-700 text-xl sticky top-0 border-b border-main/30 shadow-md shadow-slate-700 text-slate-400' />
      <div id='main' className='bg-main-dark '>
        <Outlet />
      </div>
    </>
  );
}

export default App;
