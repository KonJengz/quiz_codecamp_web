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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import AdminLayout from "../layouts/AdminLayout";

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
      { path: "/challenge", element: <QuizCategoryPage /> },
      { path: "/test", element: <Test /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      { path: "/quiz", element: <DashBoard /> },
      { path: "/challenge", element: <DashBoard /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function AppRouter() {
  const accessToken = useAuthStore.getState().accessToken;
  const actionGetMe = useAuthStore((state) => state.actionGetMe);
  const user = useAuthStore((state) => state.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthUser = async () => {
      setLoading(true);
      try {
        await actionGetMe();
      } catch (error) {
        console.log("error fecthUser", error);
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data?.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fecthUser();
    } else {
      setLoading(false);
    }
  }, [accessToken, actionGetMe]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  const finalRouter = !user
    ? guestRouter
    : user.role === "STUDENT"
    ? userRouter
    : adminRouter;
  return <RouterProvider router={finalRouter} key={user?.id} />;
}
