import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import React from "react";
import App from './App.jsx'
import Test from './routes/Test.jsx'
import NotFound from './routes/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/hello",
    element: <div>Helloooo Wooooorld</div>
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "*",
    element: <NotFound />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
