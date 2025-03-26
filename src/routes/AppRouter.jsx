import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <div className="bg-red-500">Hello quiz code camp</div>
            <button className="btn btn-primary">YES</button>
          </>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
