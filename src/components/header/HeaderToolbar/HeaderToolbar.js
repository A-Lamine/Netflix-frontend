import React from 'react';
import styles from "./HeaderToolbar.module.scss";
import Link from 'next/link'

const HeaderToolbar = (props) => {

    return (
        <div>

            <button className={styles.btn_login}><Link href='/login'> <a>S&apos;identifier</a></Link></button>

        </div>
    );

}

export default HeaderToolbar;