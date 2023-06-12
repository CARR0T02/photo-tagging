import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Loading from './Components/Loading';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='' element={<Home />} />
      <Route path='about' lazy={() => import('./pages/About')} />
      <Route path='game' lazy={() => import('./pages/GamePage/GamePage')} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>
);
