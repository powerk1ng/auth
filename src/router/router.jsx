import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { configs } from "@/api/config";
import SignUpContainer from "@/pages/Authorization/Signup/SignUpContainer";
import LoginContainer from "@/pages/Authorization/Login/LoginContainer";
import HomeContainer from "@/pages/Home/HomeContainer";

const { routes } = configs;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicRoutes />}>
        <Route element={<LoginContainer />} path={routes.login} />
        <Route element={<SignUpContainer />} path={routes.signUp} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route element={<HomeContainer />} path={routes.private} />
      </Route>
      <Route element={<p>Not Found</p>} path="*" />
    </>
  )
);
