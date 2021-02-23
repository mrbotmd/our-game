import React, { useState, createContext, useEffect } from "react";

export const IsLoggedInContext = createContext();

export const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(
    "🚀 ~ file: IsLoggedInContext.jsx ~ line 7 ~ IsLoggedInProvider ~ isLoggedIn",
    isLoggedIn
  );

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
};
