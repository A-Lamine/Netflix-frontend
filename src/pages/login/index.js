import React from 'react';
import styles from "./index.module.scss";
import HeaderLogo from "../../components/header/HeaderLogo/HeaderLogo";
const index = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header__main}>
                <HeaderLogo />
            </div>
            <div className={styles.signinform}>
                <form className={styles.form}>
                    <h1 className={styles.formh1}>S'identifier</h1>

                </form>

            </div>

        </div>
    )
};

export default index;