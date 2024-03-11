import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contries } from './pages/Contries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Contries />,
  },
]);

export function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
