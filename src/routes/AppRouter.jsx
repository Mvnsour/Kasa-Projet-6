import { createBrowserRouter } from 'react-router';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Test from '../pages/Test'

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
    path: "/test",
    element: <Test />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);