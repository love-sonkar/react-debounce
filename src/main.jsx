import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextApiUsers from "./ContextApiUsers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApiUsers>
      <App />
    </ContextApiUsers>
  </React.StrictMode>
);
