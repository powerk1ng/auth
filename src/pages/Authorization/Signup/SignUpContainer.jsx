import { useMemo, useState } from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useShallowEqualSelector } from "@/hooks/storeHooks";
import { selectSignUpLoadingState, selectSingUpError } from "@/store/selectors/selectors";
import { signUpAction } from "@/store/actions/singUpAction";

const SignUpContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loadingState = useShallowEqualSelector(selectSignUpLoadingState);
  const error = useShallowEqualSelector(selectSingUpError);

  const [selectValue, setSelectValue] = useState("");
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
    dispatch(signUpAction(signUpFormData));
  };

  return (
    <SignUp
      btnIsDisabled={btnIsDisabled}
      handleChange={handleChange}
      handleSelectionChange={handleSelectionChange}
      handleSubmit={handleSubmit}
      loading={loadingState}
      onTabChange={onTabChange}
      signUpFormData={signUpFormData}
    />
  );
};

export default SignUpContainer;
