import { useEffect, useMemo, useState } from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useShallowEqualSelector } from "@/hooks/storeHooks";
import { selectSignUpLoadingState } from "@/store/selectors/selectors";
import { signUpAction } from "@/store/actions/singUpAction";
import { resetSignUpSlice } from "@/store/slices/signUpSlice";
import { configs } from "@/api/config";

const SignUpContainer = () => {
  const { routes } = configs;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loadingState = useShallowEqualSelector(selectSignUpLoadingState);

  const [selectValue, setSelectValue] = useState("");
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: selectValue,
  });

  useEffect(() => {
    dispatch(resetSignUpSlice());
  }, []);

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  const handleSelectionChange = (value) => {
    setSelectValue(value);
    setSignUpFormData((prev) => ({ ...prev, role: value }));
  };

  const onTabChange = () => {
    navigate(routes.login);
  };

  const btnIsDisabled = useMemo(
    () => Object.values(signUpFormData).every(Boolean),
    [signUpFormData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(signUpAction(signUpFormData));

    if (result?.payload?._id) {
      navigate(routes.login);
    }
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
