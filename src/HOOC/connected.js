import React, { useState, useEffect } from "react";
import Router from "next/router";

const connected = (WrappedComponent) => {
  return (props) => {
    const [verify, setVerify] = useState(false);

    useEffect(() => {
      const token = JSON.parse(localStorage.getItem("token"));
      
      token?.token ? Router.push("/movies") : setVerify(true)
 
    }, []);
    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
};
}
export default connected;
