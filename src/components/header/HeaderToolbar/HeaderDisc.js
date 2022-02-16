import React from 'react';
import styles from "./HeaderToolbar.module.scss";
import Router from "next/router"

const HeaderDisc = () => {

    const handelsubmit = (e) =>{
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("email")

        Router.push("/")
    }
    return (
        <div>
            <a href='#'>
                <button onClick={handelsubmit} className={styles.btn_login}>déconnecter</button>
            </a>
        </div>
    );

}

export default HeaderDisc;