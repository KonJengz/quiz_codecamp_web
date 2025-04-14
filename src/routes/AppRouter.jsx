import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";

import LoginPage from "../pages/LoginPage";
import QuizPage from "../pages/user/QuizPage";
import QuizCategoryPage from "../pages/user/QuizCategoryPage";
import DashBoard from "../pages/admin/DashBoard";
import ChallengeCategoryPage from "../pages/user/ChallengeCategoryPage";
import useAuthStore from "../stores/authStore";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { shallow } from "zustand/shallow";

const guestRouter = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "*", element: <Navigate to="/" /> },
]);

const userRouter = createBrowserRouter([
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
      { path: "/quiz/:categoryId/", element: <QuizPage /> },
      { path: "/challenge/:categoryId/", element: <QuizPage /> },
      { path: "/challenge", element: <ChallengeCategoryPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function AppRouter() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const actionGetMe = useAuthStore((state) => state.actionGetMe, shallow);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fecthUser = async () => {
      try {
        await actionGetMe();
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response.data.message);
        }
      }
    };
    if (accessToken) {
      fecthUser();
    }
    console.log("first");
  }, [accessToken, actionGetMe]);

  console.log("accessToken==", accessToken);
  console.log("user==", user);

  const finalRouter = !accessToken ? guestRouter : userRouter;
  return <RouterProvider router={finalRouter} key={user?.id} />;
}
