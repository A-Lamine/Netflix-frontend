import React from 'react';
import styles from "./HeaderToolbar.module.scss";
import Router from 'next/router';

const HeaderToolbar = (props) => {
    function login(){
        Router.push('/login')
    }

    return (
        <div>

            <button className={styles.btn_login} onClick={login}>S&apos;identifier</button>

        </div>
    );

}

export default HeaderToolbar;