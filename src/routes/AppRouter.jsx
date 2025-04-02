import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";

import LoginPage from "../pages/LoginPage";
import QuizPage from "../pages/user/QuizPage";
import QuizCategoryPage from "../pages/user/QuizCategoryPage";
import DashBoard from "../pages/admin/DashBoard";
import Test from "../pages/pakinpor/Test";
import EditorWrapper from "../components/monaco_test/layout/EditorLayout";

// const guestRouter = createBrowserRouter([
//   { path: "/login", element: <LoginPage /> },
//   { path: "*", element: <Navigate to="/" /> },
// ])

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/dashBoard", element: <DashBoard /> },

  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,

        element: <QuizCategoryPage />,
      },
      { path: "/quiz/:categoryId/:quizId", element: <QuizPage /> },
      { path: "/pakinpor", element: <Test /> },
      { path: "/challenge", element: <Test /> },
      {
        path: "/monaco",
        element: <EditorWrapper />,
      },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function AppRouter() {
  // const finalRouter = !token ? guestRouter : router;
  return <RouterProvider router={router} />;
  // return <RouterProvider router={finalRouter} />;
}
