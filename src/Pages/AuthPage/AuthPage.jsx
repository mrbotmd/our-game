import Register from "../../component/Register/Register";
import Login from "../../component/Login/Login";
import { useHistory } from "react-router-dom";

export default function AuthPage() {
  const history = useHistory();

  return (
    <div>
      {history.location.pathname === "/register" && <Register />}
      {history.location.pathname === "/login" && <Login />}
    </div>
  );
}
