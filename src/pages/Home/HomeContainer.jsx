import React from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "@/store/actions/logoutAction";
import { configs } from "@/api/config";
import $api from "@/api/interceptors";

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

  const getUsers = async () => {
    try {
      const users = await $api.get("/api/users");
      console.log(users);
    } catch (error) {
      console.error("axios error", error);
    }
  };

  return (
    <div>
      <Home handleLogout={handleLogout} getUsers={getUsers} />
    </div>
  );
};

export default HomeContainer;
