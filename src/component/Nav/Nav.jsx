import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutUser, startUserSession } from "../../axiosClient";
import { AuthContext } from "../../context/AuthContext";
import { handleUserAuth } from "../../helpers";

export default function Nav() {
  const [, dispatch] = useContext(AuthContext);

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
        <button
          onClick={async () =>
            await handleUserAuth("", "LOGOUT", logoutUser, dispatch)
          }
        >
          logout
        </button>
      </ul>
    </nav>
  );
}
