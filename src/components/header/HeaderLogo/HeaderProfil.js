import React from 'react';
import LogoImg from "../../../../public/avatar.png";
import styles from "./HeaderLogo.module.scss";
import Link from 'next/link'


const HeaderProfil = () => {
    return (
        <div className={styles.header__icone}>
            <Link href='/Account'>
                <a>
                    <img src={LogoImg.src} alt="Icon" />
                </a>
            </Link>
        </div>
    );
}

export default HeaderProfil;