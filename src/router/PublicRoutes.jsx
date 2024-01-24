import { Outlet, Navigate, useLocation } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const status = false;

  const location = useLocation();
  return children ? children : <Outlet />;
};


export default PublicRoutes;
