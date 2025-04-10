import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";

import LoginPage from "../pages/LoginPage";
import QuizPage from "../pages/user/QuizPage";
import QuizCategoryPage from "../pages/user/QuizCategoryPage";
import DashBoard from "../pages/admin/DashBoard";

import ModalCreateQuiz from "../components/dashBoardComponents/ModalCreateQuiz";

import Test from "../pages/pakinpor/Test";
import ChallengeCategoryPage from "../pages/user/ChallengeCategoryPage";
import useAuthStore from "../stores/authStore";

const guestRouter = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "*", element: <Navigate to="/" /> },
  { path: "/test", element: <Test /> },
]);

const userRouter = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },

  { path: "/quize", element: <ModalCreateQuiz /> },

  { path: "/dashBoard", element: <DashBoard /> },

  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <QuizCategoryPage />,
      },
      { path: "/quiz/:categoryId/", element: <QuizPage /> },
      { path: "/challenge/:categoryId/", element: <QuizPage /> },
      { path: "/challenge", element: <ChallengeCategoryPage /> },
      { path: "/test", element: <Test /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function AppRouter() {
  const accessToken = useAuthStore((state) => state.accessToken);
  // const accessToken = useAuthStore.getState().accessToken;

  console.log("accessToken==", accessToken);
  const finalRouter = !accessToken ? guestRouter : userRouter;
  return <RouterProvider router={finalRouter} key={accessToken} />;
  // return <RouterProvider router={finalRouter} />;
}
