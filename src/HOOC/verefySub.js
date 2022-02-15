import React, { useState, useEffect } from "react";
import Router from "next/router";

const verefySub = (WrappedComponent) => {
  return (props) => {
    const [verify, setVerify] = useState(false);

    useEffect(() => {
      const user = localStorage.getItem("user");
      user?.abannoment ? setVerify(true): Router.push("/subscribtion")
    }, []);
    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
};
}
export default verefySub;
