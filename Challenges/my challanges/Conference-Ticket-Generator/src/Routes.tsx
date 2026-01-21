import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './Components/Form';
import { Ticket } from './Components/Ticket';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form />,
  },
  {
    path: '/ticket',
    element: <Ticket />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
