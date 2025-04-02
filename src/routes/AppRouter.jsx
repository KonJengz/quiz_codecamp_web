

import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";

import LoginPage from "../pages/LoginPage";
import QuizPage from "../pages/user/QuizPage";
import QuizCategoryPage from "../pages/user/QuizCategoryPage";
import DashBoard from "../pages/admin/DashBoard";
import ModalCreateQuiz from "../components/dashBoardComponents/ModalCreateQuiz";

// const guestRouter = createBrowserRouter([
//   { path: "/login", element: <LoginPage /> },
//   { path: "*", element: <Navigate to="/" /> },
// ])

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {path: "/quize", element: <ModalCreateQuiz/>},
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element:
        <QuizCategoryPage />
      },
      { path: "/dashBoard", element: <DashBoard/>},
      { path: "/quiz/:categoryId/:quizId", element: <QuizPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },

]);

export default function AppRouter() {
  // const finalRouter = !token ? guestRouter : router;
  return <RouterProvider router={router} />;
  // return <RouterProvider router={finalRouter} />;
}
