import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './components/Root';
import Home from './components/Home';
import Picture from './components/Picture';
import Leaderboard from './components/Leaderboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Picture />,
        path: '/picture',
      },
      {
        element: <Leaderboard />,
        path: '/leaderboard',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
