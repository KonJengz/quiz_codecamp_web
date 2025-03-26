

import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";
import NavBar from "../components/NavBar";
import LoginPage from "../pages/LoginPage";
import QuizPage from "../pages/QuizPage";
import QuizCategoryPage from "../pages/QuizCategoryPage";
// const guestRouter = createBrowserRouter([
//   { path: "/login", element: <LoginPage /> },
//   { path: "*", element: <Navigate to="/" /> },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,

        element:
          <NavBar />
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/quizCategory", element: <QuizCategoryPage/>},
      { path: "/quiz/:categoryId/:quizId", element: <QuizPage/>},
      { path: "*", element: <Navigate to="/" /> },
    ],
  },

]);

export default function AppRouter() {
  // const finalRouter = !token ? guestRouter : router;
  return <RouterProvider router={router} />;
  // return <RouterProvider router={finalRouter} />;
}
