import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "@/pages/Home/Home";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { configs } from "@/api/config";
import SignUpContainer from "@/pages/Authorization/Signup/SignUpContainer";
import LoginContainer from "@/pages/Authorization/Login/LoginContainer";

const { routes } = configs;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Home />} path={routes.starter} />
      <Route element={<PublicRoutes />}>
        <Route element={<LoginContainer />} path={routes.login} />
        <Route element={<SignUpContainer />} path={routes.signUp} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route element={<Home />} path={routes.private} />
      </Route>
      <Route element={<p>Not Found</p>} path="*" />
    </>
  )
);
