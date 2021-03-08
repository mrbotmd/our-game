import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initAuthState = {
    isLoggedIn: JSON.parse(window.localStorage.getItem("isLoggedIn")) || false,
    accessToken: window.localStorage.getItem("accessToken") || "",
    profile: JSON.parse(window.localStorage.getItem("profile")) || "",
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
        window.localStorage.setItem("profile", action.payload.profile);
        return {
          isLoggedIn: true,
          accessToken: action.payload.accessToken,
          profile: action.payload.profile,
        };
      }

      case "LOGOUT":
        window.localStorage.setItem("accessToken", "");
        window.localStorage.setItem("isLoggedIn", false);
        window.localStorage.setItem("profile", JSON.stringify({}));
        return {
          isLoggedIn: false,
          accessToken: "",
          profile: JSON.stringify({}),
        };

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
