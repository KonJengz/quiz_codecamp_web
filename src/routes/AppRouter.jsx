import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <></>
      }
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
