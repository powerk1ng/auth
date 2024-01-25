import { Outlet, Navigate, useLocation } from "react-router-dom";
import bg from "@/assets/images/login-bg.jpg";

const PublicRoutes = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      style={{ background: `url(${bg})no-repeat center / cover` }}
    >
      <Outlet />
    </div>
  );
};

export default PublicRoutes;
