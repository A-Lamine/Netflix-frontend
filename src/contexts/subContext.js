import { createContext, useState, useEffect } from "react";

const SubContext = createContext({
  user: typeof window !== "undefined" ? localStorage.getItem("user") : null
});

export const SubContextProvider = ({ children }) => {
 

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

export default SubContext;
