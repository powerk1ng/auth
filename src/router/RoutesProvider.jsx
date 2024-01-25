import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoutesProvider = () => {
  return (
    <>
      <ToastContainer limit={1} autoClose={2000}/>
      <RouterProvider router={router} />
    </>
  );
};

export default RoutesProvider;
