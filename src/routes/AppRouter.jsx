import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import ApartmentPage from '../pages/ApartmentPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "ApartmentPage/:id",
        element: <ApartmentPage />,
      }
    ],
  }
]);