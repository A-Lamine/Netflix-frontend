import React, { useState, useEffect } from "react";
import Router from "next/router";

const isAdmin = (WrappedComponent) => {
  return (props) => {
    const [verify, setVerify] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
      
        token?.isAdmin ? setVerify(true): Router.push("/")
  
 
    }, []);
    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
};
}
export default isAdmin;
