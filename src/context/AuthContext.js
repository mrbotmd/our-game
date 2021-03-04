import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initAuthState = {
    isLoggedIn: JSON.parse(window.localStorage.getItem("isLoggedIn")) || false,
    accessToken: window.localStorage.getItem("accessToken") || "",
  };
  console.log(
    "🚀 ~ file: AuthContext.js ~ line 12 ~ AuthProvider ~ initAuthState",
    initAuthState
  );

  const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        window.localStorage.setItem("accessToken", action.payload.accessToken);
        window.localStorage.setItem("isLoggedIn", true);
        return { isLoggedIn: true, accessToken: action.payload.accessToken };
      }

      case "LOGOUT":
        window.localStorage.setItem("accessToken", "");
        window.localStorage.setItem("isLoggedIn", false);
        return { isLoggedIn: false, accessToken: "" };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, initAuthState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
