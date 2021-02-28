import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../axiosClient";
import { AuthContext } from "../../context/AuthContext";

export default function Nav() {
  const [state, dispatch] = useContext(AuthContext);

  const handleLogout = (accessToken) => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
        <li>
          <Link to="/register">Sign up </Link>
        </li>
        <button onClick={handleLogout}>logout</button>
      </ul>
    </nav>
  );
}
