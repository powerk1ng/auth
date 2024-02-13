import { configs } from "@/api/config";
import useAuthContext from "@/hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const { routes } = configs;

const ProtectedRoutes = () => {
  const { token } = useAuthContext();

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to={routes.login} />;
  }
};

export default ProtectedRoutes;
