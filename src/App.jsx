import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer limit={1} autoClose={2000} pauseOnHover={false}/>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
