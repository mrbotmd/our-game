import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import App from "./App";
import { IsLoggedInProvider } from "./context/IsLoggedInContext";

ReactDOM.render(
  <React.StrictMode>
    <IsLoggedInProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IsLoggedInProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
