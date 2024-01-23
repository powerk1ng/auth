import { useState } from "react";
import Authorization from "./Authorization";
import bg from "@/assets/images/login-bg.jpg";

const AuthorizationContainer = (props) => {
  const [selectValue, setSelectValue] = useState("");

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: selectValue,
  });

  const handleChange = (setData, data, e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (data, e) => {
    e.preventDefault();

    if (data.hasOwnProperty("role")) {
      setSignUpFormData((prev) => ({ ...prev, role: selectValue }));
    }
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      style={{ background: `url(${bg})no-repeat center / cover` }}
    >
      <Authorization
        setSelectValue={setSelectValue}
        selectValue={selectValue}
        handleChange={handleChange}
        loginFormData={loginFormData}
        setLoginFormData={setLoginFormData}
        signUpFormData={signUpFormData}
        setSignUpFormData={setSignUpFormData}
        handleSubmit={handleSubmit}
        {...props}
      />
    </div>
  );
};

export default AuthorizationContainer;
