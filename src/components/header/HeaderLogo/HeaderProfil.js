import React from 'react';
import LogoImg from "../../../../public/avatar.png";
import styles from "./HeaderLogo.module.scss";

const HeaderProfil = () => {
    return (
        <div className={styles.header__icone}>
            <a href='/Account'>
            <img src={LogoImg.src} alt="Icon"/>
            </a>
        </div>
    );
}

export default HeaderProfil;