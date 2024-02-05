import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  
  // useEffect(() => {
  //   const handlePopstate = () => window.history.forward();

  //   window.addEventListener("popstate", handlePopstate);

  //   return () => {
  //     window.removeEventListener("popstate", handlePopstate);
  //   };
  // }, [window.location.href]);
  
  return (
    <Provider store={store}>
      <AuthProvider>
        <ToastContainer limit={1} autoClose={2000} pauseOnHover={false} />
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  );
};

export default App;
