import { useState } from "react";
import Authorization from "./Authorization";
import bg from "@/assets/images/login-bg.jpg";
import { fetchData } from "@/api/requests";
import { configs } from "@/api/config";
import User from "@backend/models/user.model";

const AuthorizationContainer = (props) => {
  const { baseUrl, endpoint } = configs;

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

  const user = new User();

  const handleChange = (setData, data, e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (data, e) => {
    e.preventDefault();

    if ("role" in data) {
      setSignUpFormData((prev) => ({ ...prev, role: selectValue }));

      fetchData(`${baseUrl}${endpoint.signup}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    console.log(user)
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
