import { ErrorSharp } from "@material-ui/icons";
import React, { useState, createContext, useEffect, useReducer } from "react";
import { logoutUser } from "../axiosClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initAuthState = {
    isLoggedIn: JSON.parse(window.localStorage.getItem("isLoggedIn")) || false,
    acceesToken: window.localStorage.getItem("accessToken") || "",
  };
  console.log(
    "🚀 ~ file: AuthContext.js ~ line 12 ~ AuthProvider ~ initAuthState",
    initAuthState
  );

  const authReducer = async (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        console.log("AuthContext -> LOGIN", action);
        window.localStorage.setItem("accessToken", action.payload.accessToken);
        window.localStorage.setItem("isLoggedIn", true);
        return { isLoggedIn: true, acceesToken: action.payload.accessToken };
      }

      case "LOGOUT":
        try {
          console.log(
            "🚀 ~ file: AuthContext.js ~ line 38 ~ authReducer ~ state",
            state
          );
          console.log(
            "🚀 ~ file: AuthContext.js ~ line 34 ~ authReducer ~ state.acceesToken",
            state.acceesToken
          );
          const isLoggedOut = await logoutUser(state.acceesToken);
          console.log(
            "🚀 ~ file: AuthContext.js ~ line 25 ~ authReducer ~ isLoggedOut",
            isLoggedOut
          );
          if (isLoggedOut.status === 200) {
            window.localStorage.setItem("accessToken", "");
            window.localStorage.setItem("isLoggedIn", false);
            return { isLoggedIn: false, acceesToken: "" };
          }
        } catch (error) {
          console.error(error);
        }
        break;

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
