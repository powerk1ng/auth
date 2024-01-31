import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
