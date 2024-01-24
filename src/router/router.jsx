import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Home from "@/pages/Home/Home";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { configs } from "@/api/config";

const { routes } = configs;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
    children: [
      {
        path: routes.home,
        element: <App />,
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
