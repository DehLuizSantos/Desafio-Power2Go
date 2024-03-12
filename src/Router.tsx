import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contries } from './pages/Contries';
import ModulesWrapper from './modulesWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ModulesWrapper>
        <Contries />
      </ModulesWrapper>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
