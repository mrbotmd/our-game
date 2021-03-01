import React, { useContext } from "react";
import Register from "../../component/Register/Register";
import Login from "../../component/Login/Login";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { startUserSession } from "../../axiosClient";

export default function AuthPage() {
  const history = useHistory();
  const [state, dispatch] = useContext(AuthContext);

  // Потенциально вынести эту функцию в хэлперы
  async function handleUserAuth(data, authRequest) {
    const accessToken = await startUserSession();
    if (accessToken.status === 200) {
      const response = await authRequest(accessToken.data.access_token, data);
      if (response.status === 200) {
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
