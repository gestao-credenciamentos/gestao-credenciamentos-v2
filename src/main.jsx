import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/login.css"; // garante que o CSS carrega

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
