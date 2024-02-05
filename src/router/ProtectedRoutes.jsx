import { configs } from "@/api/config";
import { useShallowEqualSelector } from "@/hooks/storeHooks";
import useAuthContext from "@/hooks/useAuthContext";
import { selectCurrentUser } from "@/store/selectors/selectors";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const { routes } = configs;

const ProtectedRoutes = () => {
  const { user } = useAuthContext();

  if (user) {
    return user ? <Outlet /> : <Navigate to={routes.login} />;
  }
};

export default ProtectedRoutes;
