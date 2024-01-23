import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Home from "@/pages/Home/Home";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  
  {
    path: "/protected",
    element: <ProtectedRoutes />,
    children: [
      {
        index: "/home",
        element: <Home />,
      },
    ],
  },
]);
