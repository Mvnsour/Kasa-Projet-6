import { createBrowserRouter } from 'react-router';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);