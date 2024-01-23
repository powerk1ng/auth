import { Outlet, Navigate, useLocation } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const location = useLocation();
  return children ? children : <Outlet />;
};


export default PublicRoutes;
