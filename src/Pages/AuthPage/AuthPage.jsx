import React, { useContext } from "react";
import Register from "../../component/Register/Register";
import Login from "../../component/Login/Login";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function AuthPage() {
  const history = useHistory();
  const { auth, setAuth } = useContext(AuthContext);
  console.log("🚀 ~ file: AuthPage.jsx ~ line 10 ~ AuthPage ~ auth", auth);
  console.log("🚀 ~ file: AuthPage.jsx ~ line 7 ~ AuthPage ~ history", history);
  return (
    <div>
      {history.location.pathname === "/register" && <Register />}
      {history.location.pathname === "/login" && <Login />}
    </div>
  );
}
