import Login from "./Login";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { configs } from "@/api/config";
import { signInAction } from "@/store/actions/singInAction";
import { useAppDispatch, useShallowEqualSelector } from "@/hooks/storeHooks";
import { selectSignInLoadingState } from "@/store/selectors/selectors";
import useAuthContext from "@/hooks/useAuthContext";

const LoginContainer = () => {
  const loading = useShallowEqualSelector(selectSignInLoadingState);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();
  const dispatchApp = useAppDispatch();

  const { routes } = configs;

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

    const response = await dispatchApp(signInAction(loginFormData));

    if (response?.payload?.success) {
      dispatch({ type: "LOGIN", payload: response.payload.currentUser });
      
      localStorage.setItem("user", response.payload.currentUser);
      navigate(routes.private);
    }
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
