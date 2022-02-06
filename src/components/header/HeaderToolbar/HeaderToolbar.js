import React from 'react';
import styles from "./HeaderToolbar.module.scss";


const HeaderToolbar = () => {
    
        return (
            <div>
                <a href='/login'>
                <button className={styles.btn_login}>S'identifier</button>
                </a>
            </div>
        );
    
}

export default HeaderToolbar;