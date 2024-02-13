import { Navigate, Outlet } from "react-router-dom";
import bg from "@/assets/images/login-bg.jpg";
import useAuthContext from "@/hooks/useAuthContext";
import { configs } from "@/api/config";

const PublicRoutes = () => {
  const { routes } = configs;
  const { token } = useAuthContext();

  if (!token) {
    return (
      <div
        className="w-full min-h-screen flex justify-center pt-32"
        style={{ background: `url(${bg})no-repeat center / cover` }}
      >
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to={routes.private} />;
  }
};

export default PublicRoutes;
