import React from 'react';
import LogoImg from "../../../../public/logo.svg";
import styles from "./HeaderLogo.module.scss";

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <a href='/'>
            <img src={LogoImg.src} alt="Netflix"/>
            </a>
        </div>
    );
}

export default Headerlogo;