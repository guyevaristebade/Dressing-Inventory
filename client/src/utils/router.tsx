import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  ForgotPassword,
  SignupPage,
  LoginPage,
  ResetPassword,
} from "../pages";
import { Layout } from "../components";
import Dashboard from "../components/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
