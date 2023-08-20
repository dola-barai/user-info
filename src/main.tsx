import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FirstPage from './components/FirstPage/FirstPage.tsx';
import SecondPage from './components/SecondPage/SecondPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage></FirstPage>
  },
  {
    path: "/second",
    element: <SecondPage></SecondPage>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
