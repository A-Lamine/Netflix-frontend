
import { createContext, useState, useEffect } from "react";

const SubContext = createContext({
  /* token: typeof window !== "undefined" ? localStorage.getItem("token") : null , */
  unevaleur: 1,

});

export const SubContextProvider = ({ children }) => {
 

  const context = {
    /* user, */
  };

  useEffect(() => {
    /* localStorage.setItem("usze", JSON.stringify(user)); */
    
   
  }, []);

  return (
    <Context.Provider value={context}>{children}</Context.Provider>
  );
};

export default SubContext;
