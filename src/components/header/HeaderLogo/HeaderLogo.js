import React from 'react';
import LogoImg from "../../../../public/logo.svg";
import styles from "./HeaderLogo.module.scss";
import Link from 'next/link';

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <Link href='/'>
                <a>
                    <img src={LogoImg.src} alt="Netflix" />
                </a>
            </Link>
        </div>
    );
}

export default Headerlogo;