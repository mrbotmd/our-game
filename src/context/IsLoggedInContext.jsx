import React, { useState, createContext } from "react";

export const IsLoggedInContext = createContext(false);

export function IsLoggedInProvider({ children }) {
  return <IsLoggedInContext.Provider>{children}</IsLoggedInContext.Provider>;
}
