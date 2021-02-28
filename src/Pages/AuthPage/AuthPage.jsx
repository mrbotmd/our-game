import React, { useContext } from "react";
import Register from "../../component/Register/Register";
import Login from "../../component/Login/Login";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { registerUser, startUserSession } from "../../axiosClient";

export default function AuthPage() {
  const history = useHistory();
  const [state, dispatch] = useContext(AuthContext);
  // console.log("🚀 ~ file: AuthPage.jsx ~ line 10 ~ AuthPage ~ auth", state);
  // console.log("🚀 ~ file: AuthPage.jsx ~ line 7 ~ AuthPage ~ history", history);

  async function handleUserAuth(data, authRequest) {
    console.log(
      "🚀 ~ file: AuthPage.jsx ~ line 15 ~ handleUserAuth ~ data",
      data
    );
    const accessToken = await startUserSession();
    if (accessToken.status === 200) {
      const isRegistered = await authRequest(
        accessToken.data.access_token,
        data
      );
      if (isRegistered.status === 200) {
        dispatch({
          type: "LOGIN",
          payload: { accessToken: accessToken.data.access_token },
        });
      }
    }
  }
  return (
    <div>
      {history.location.pathname === "/register" && (
        <Register handleUserAuth={handleUserAuth} />
      )}
      {history.location.pathname === "/login" && (
        <Login handleUserAuth={handleUserAuth} />
      )}
    </div>
  );
}
