import React, { useState, useEffect } from "react";
import Router from "next/router";
import authService from "../services/auth.service";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [verify, setVerify] = useState(false);

    useEffect(() => {
      const user = localStorage.getItem("user");
     user ? setVerify(true): Router.push("/login")

    }, []);
    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
