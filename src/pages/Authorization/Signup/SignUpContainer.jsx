import { useMemo, useState } from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/api/requests";
import { configs } from "@/api/config";
import { toast } from "react-toastify";

const SignUpContainer = () => {
  const { endpoint } = configs;
  const navigate = useNavigate();

  const [selectValue, setSelectValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: selectValue,
  });

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  const handleSelectionChange = (value) => {
    setSelectValue(value);
    setSignUpFormData((prev) => ({ ...prev, role: value }));
  };

  const onTabChange = () => {
    navigate("/login");
  };

  const btnIsDisabled = useMemo(
    () => Object.values(signUpFormData).every(Boolean),
    [signUpFormData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    fetchData(`${endpoint.auth.signUp}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpFormData),
    })
      .then(() => {
        toast.success("Congratulations! You have successfully signed up", {
          theme: "light",
        });
      })
      .then(() =>
        setSignUpFormData({
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
        })
      )
      .then(() => navigate("/login"))
      .catch((error) => {
        console.error("Error during signup:", error);
        toast.error("Error!", {
          hideProgressBar: false,
          theme: "light",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <SignUp
      btnIsDisabled={btnIsDisabled}
      handleChange={handleChange}
      handleSelectionChange={handleSelectionChange}
      handleSubmit={handleSubmit}
      loading={loading}
      onTabChange={onTabChange}
      signUpFormData={signUpFormData}
    />
  );
};

export default SignUpContainer;
