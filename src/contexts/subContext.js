import { createContext, useState, useEffect } from "react";

const subContext = createContext({
  user: typeof window !== "undefined" ? localStorage.getItem("user") : null
});

export const subContextProvider = ({ children }) => {
 

  const context = {
    user,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    
   
  }, []);

  return (
    <Context.Provider value={context}>{children}</Context.Provider>
  );
};

export default subContext;
