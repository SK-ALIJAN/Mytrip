import React from "react";
import { createContext } from "react";
let Contextapi = createContext();
const ContextProvider = ({ children }) => {
  return <Contextapi.Provider value={null}>{children}</Contextapi.Provider>;
};

export { ContextProvider, Contextapi };
