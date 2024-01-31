import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from '@/store/store';
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <ToastContainer limit={1} autoClose={2000} pauseOnHover={false} />
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
