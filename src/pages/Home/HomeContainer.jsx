import React from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "@/store/actions/logoutAction";
import { configs } from "@/api/config";

const HomeContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { routes } = configs;

  const handleLogout = async () => {
    const response = await dispatch(logoutAction());

    if (response?.payload?.success) {
      navigate(routes.login);
    } else {
        
    }
  };
  return (
    <div>
      <Home handleLogout={handleLogout} />
    </div>
  );
};

export default HomeContainer;
