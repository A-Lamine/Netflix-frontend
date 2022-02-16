import React, { useState, useEffect } from "react";
import Router from "next/router";

const verefySub = (WrappedComponent) => {
  return (props) => {
    const [verify, setVerify] = useState(false);

    useEffect(() => {
      const token = JSON.parse(localStorage.getItem("token"));

      token?.subscription ? setVerify(true): Router.push("/subscription")
      console.log(token)
      console.log(token.subscription)
    }, []);
    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
};
}
export default verefySub;
