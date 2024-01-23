import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  return children ? children : <Outlet />;

};

export default ProtectedRoutes;
