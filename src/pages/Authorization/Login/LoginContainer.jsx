import Login from "./Login";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/api/requests";
import { configs } from "@/api/config";

const LoginContainer = () => {
  const { endpoint, routes } = configs;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const onTabChange = () => {
    navigate(routes.signUp);
  };

  const btnIsDisabled = useMemo(
    () => Object.values(loginFormData).every(Boolean),
    [loginFormData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    fetchData(`${endpoint.auth.signIn}`)
      .then(() =>
        setSignUpFormData({
          email: "",
          password: "",
        })
      )
      .then(() => navigate(routes.private))
      .catch((error) => {
        console.error("Error during signin:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Login
      btnIsDisabled={btnIsDisabled}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      onTabChange={onTabChange}
      loginFormData={loginFormData}
    />
  );
};

export default LoginContainer;
