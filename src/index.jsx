import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Loading from './Components/Loading';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='' element={<Home />} />
      <Route path='about' lazy={() => import('./Components/About')} />
      <Route path='game' lazy={() => import('./Components/GamePage')} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>
);
