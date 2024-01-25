import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import RoutesProvider from "./router/RoutesProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoutesProvider />
);
