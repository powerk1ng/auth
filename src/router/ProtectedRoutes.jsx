import { configs } from "@/api/config";
import { useShallowEqualSelector } from "@/hooks/storeHooks";
import { selectCurrentUser } from "@/store/selectors/selectors";
import { Navigate, Outlet  } from "react-router-dom";

const { routes } = configs

const ProtectedRoutes = () => {
    const user = useShallowEqualSelector(selectCurrentUser);
    
    return user ? <Outlet /> : <Navigate to={routes.login}/>;
};

export default ProtectedRoutes;
