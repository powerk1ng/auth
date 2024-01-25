import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { configs } from "@/api/config";
import SignUpContainer from "@/pages/Authorization/Signup/SignUpContainer";
import LoginContainer from "@/pages/Authorization/Login/LoginContainer";

const { routes } = configs;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
    children: [
      {
        path: "/signup",
        element: <SignUpContainer />,
      },
      {
        path: "/login",
        element: <LoginContainer />,
      },
    ],
  },
  {
    path: "/private",
    element: <ProtectedRoutes />,
    children: [
      {
        index: routes.private,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Not found</p>,
  },
]);
