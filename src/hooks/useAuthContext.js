import {
  AuthContext
} from "@/context/AuthProvider";
import {
  useContext
} from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext can be used only inside of a AuthProvider');
  }

  return context;
};

export default useAuthContext;