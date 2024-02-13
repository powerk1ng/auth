import Loader from "@/components/Loader";
import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext(null);

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { token: action.payload };

    case "LOGOUT":
      return { token: null };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch({ type: "LOGIN", payload: token });
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="bg-black/80 grid place-content-center min-h-screen">
        <Loader width={80} height={80} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
