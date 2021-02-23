import React from "react";
import Register from "../../component/Register/Register";
import Login from "../../component/Login/Login";
import { useHistory } from "react-router-dom";

export default function AuthPage() {
  const history = useHistory();
  console.log("🚀 ~ file: AuthPage.jsx ~ line 7 ~ AuthPage ~ history", history);
  return (
    <div>
      {history.location.pathname === "/register" && <Register />}
      {history.location.pathname === "/login" && <Login />}
    </div>
  );
}
